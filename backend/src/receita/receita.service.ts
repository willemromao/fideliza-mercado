import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { ReceitaRepository } from './receita.repository';
import { Receita } from './entities/receita.entity';
import { ConcluirReceitaDto } from './dto/concluir-receita.dto';
import { UsuarioRepository } from '../usuario/usuario.repository';
import { TipoUsuario } from '../usuario/entities/usuario.entity';
import {
  ReceitaConcluida,
  StatusReceitaConcluida,
} from './entities/receita-concluida.entity';
@Injectable()
export class ReceitaService {
  private readonly vendasSimuladas = new Map<string, number[]>([
    ['VENDA-1001', [1, 2, 3]],
    ['VENDA-1002', [2, 4, 5]],
    ['VENDA-1003', [1, 4, 6]],
  ]);

  constructor(
    private readonly receitaRepository: ReceitaRepository,
    private readonly usuarioRepository: UsuarioRepository,
  ) {}
  async create(createReceitaDto: CreateReceitaDto) {
    return await this.receitaRepository.upsert(createReceitaDto);
  }

  async findAll() {
    return await this.receitaRepository.listarTodas();
  }

  async findOne(id: number) {
    return await this.receitaRepository.buscarPorId(id);
  }

  async renderizarReceitaCompleta(id: number): Promise<Receita | null> {
    const receita = await this.receitaRepository.buscarPorIdComIngredientes(id);

    if (!receita) {
      throw new NotFoundException('Receita não encontrada');
    }

    return receita;
  }

  async update(id: number, updateReceitaDto: UpdateReceitaDto) {
    return await this.receitaRepository.upsert({ ...updateReceitaDto, id });
  }

  async remove(id: number) {
    return await this.receitaRepository.remover(id);
  }

  async concluirReceita(
    id: number,
    concluirReceitaDto: ConcluirReceitaDto,
  ): Promise<ReceitaConcluida> {
    const receita = await this.receitaRepository.buscarPorIdComIngredientes(id);

    if (!receita) {
      throw new NotFoundException('Receita não encontrada');
    }

    const usuario = await this.usuarioRepository.buscarPorId(
      concluirReceitaDto.usuarioId,
    );

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    if (usuario.tipoUsuario !== TipoUsuario.CLIENTE) {
      throw new BadRequestException('Somente clientes podem concluir receitas');
    }

    const ingredientesDaReceita = receita.ingredientes ?? [];
    const produtosComprados = this.buscarProdutosDaVenda(
      concluirReceitaDto.vendaId,
    );

    if (!produtosComprados) {
      const conclusaoInvalida = await this.receitaRepository.salvarConclusao({
        receita,
        usuario,
        vendaId: concluirReceitaDto.vendaId,
        status: StatusReceitaConcluida.INVALIDA,
        pontosConcedidos: 0,
        ingredientesComprados: [],
        ingredientesFaltantes: ingredientesDaReceita.map((ingrediente) =>
          String(ingrediente.produto?.id ?? ingrediente.id),
        ),
        motivoRejeicao: 'Venda não localizada na simulação interna',
      });

      return conclusaoInvalida;
    }

    const produtoIdsComprados = new Set(produtosComprados);
    const ingredientesObrigatorios = ingredientesDaReceita.filter(
      (ingrediente) => !ingrediente.opcional,
    );

    const ingredientesFaltantes = ingredientesObrigatorios.filter(
      (ingrediente) => !produtoIdsComprados.has(ingrediente.produto.id),
    );

    const ingredientesComprados = ingredientesDaReceita
      .filter((ingrediente) => produtoIdsComprados.has(ingrediente.produto.id))
      .map((ingrediente) => String(ingrediente.produto.id));

    const conclusaoValida = ingredientesFaltantes.length === 0;
    const pontosConcedidos = conclusaoValida ? receita.pontosRecompensa : 0;

    if (conclusaoValida) {
      const pontosAtuais = usuario.pontos ?? 0;
      await this.usuarioRepository.upsert({
        ...usuario,
        pontos: pontosAtuais + pontosConcedidos,
      });
    }

    return this.receitaRepository.salvarConclusao({
      receita,
      usuario,
      vendaId: concluirReceitaDto.vendaId,
      status: conclusaoValida
        ? StatusReceitaConcluida.VALIDA
        : StatusReceitaConcluida.INVALIDA,
      pontosConcedidos,
      ingredientesComprados,
      ingredientesFaltantes: ingredientesFaltantes.map((ingrediente) =>
        String(ingrediente.produto.id),
      ),
      motivoRejeicao: conclusaoValida
        ? undefined
        : 'Os ingredientes comprados não correspondem à receita enviada',
    });
  }

  private buscarProdutosDaVenda(vendaId: string): number[] | null {
    return this.vendasSimuladas.get(vendaId) ?? null;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receita } from './entities/receita.entity';
import { ReceitaIngrediente } from './entities/receita-ingredientes.entity';
import { ReceitaConcluida } from './entities/receita-concluida.entity';

@Injectable()
export class ReceitaRepository {
  constructor(
    @InjectRepository(Receita)
    private readonly repository: Repository<Receita>,
    @InjectRepository(ReceitaIngrediente)
    private readonly ingredienteRepository: Repository<ReceitaIngrediente>,
    @InjectRepository(ReceitaConcluida)
    private readonly receitaConcluidaRepository: Repository<ReceitaConcluida>,
  ) {}

  async upsert(dados: Partial<Receita>): Promise<void> {
    await this.repository.upsert(dados, ['id']);
  }

  async listarTodas(): Promise<Receita[]> {
    return this.repository.find();
  }

  async buscarPorId(id: number): Promise<Receita | null> {
    return this.repository.findOne({ where: { id } });
  }

  async buscarPorIdComIngredientes(id: number): Promise<Receita | null> {
    return this.repository.findOne({
      where: { id },
      relations: {
        ingredientes: {
          produto: true,
        },
      },
    });
  }

  async listarIngredientesDaReceita(id: number): Promise<ReceitaIngrediente[]> {
    return this.ingredienteRepository.find({
      where: { receita: { id } },
      relations: {
        produto: true,
      },
    });
  }

  async salvarConclusao(
    dados: Partial<ReceitaConcluida>,
  ): Promise<ReceitaConcluida> {
    return this.receitaConcluidaRepository.save(
      this.receitaConcluidaRepository.create(dados),
    );
  }

  async remover(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

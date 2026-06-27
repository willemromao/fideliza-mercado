import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receita } from './entities/receita.entity';

@Injectable()
export class ReceitaRepository {
  constructor(
    @InjectRepository(Receita)
    private repository: Repository<Receita>,
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

  // async renderizarReceita(id: number): Promise<Receita> {
  //   const ingredientesReceita = await this.ingredienteRepository.find({
  //     where: { receita: { id } },
  //     relations: ['ingrediente'],
  //   });
  //   const receita = await this.repository.findOne({
  //     where: { id },
  //     relations: ['produtos'],
  //   });
  //   return { ...receita, ingredientes: ingredientesReceita };
  // }

  async remover(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

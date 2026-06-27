import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutoRepository {
  constructor(
    @InjectRepository(Produto)
    private repository: Repository<Produto>,
  ) {}

  async upsert(dados: Partial<Produto>): Promise<void> {
    await this.repository.upsert(dados, ['id']);
  }

  async listarTodos(): Promise<Produto[]> {
    return this.repository.find();
  }

  async buscarPorId(id: number): Promise<Produto | null> {
    return this.repository.findOne({ where: { id } });
  }

  async remover(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

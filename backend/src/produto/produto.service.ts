import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutoRepository } from './produto.repository';

@Injectable()
export class ProdutoService {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  async create(createProdutoDto: CreateProdutoDto) {
    return this.produtoRepository.upsert(createProdutoDto);
  }

  async findAll() {
    return this.produtoRepository.listarTodos();
  }

  async findOne(id: number) {
    return this.produtoRepository.buscarPorId(id);
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.produtoRepository.upsert(updateProdutoDto);
  }

  async remove(id: number) {
    return this.produtoRepository.remover(id);
  }
}

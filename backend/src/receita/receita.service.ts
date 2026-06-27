import { Injectable } from '@nestjs/common';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { ReceitaRepository } from './receita.repository';

@Injectable()
export class ReceitaService {
  constructor(private readonly receitaRepository: ReceitaRepository) {}
  async create(createReceitaDto: CreateReceitaDto) {
    return await this.receitaRepository.upsert(createReceitaDto);
  }

  async findAll() {
    return await this.receitaRepository.listarTodas();
  }

  async findOne(id: number) {
    return await this.receitaRepository.buscarPorId(id);
  }

  async update(updateReceitaDto: UpdateReceitaDto) {
    return await this.receitaRepository.upsert(updateReceitaDto);
  }

  async remove(id: number) {
    return await this.receitaRepository.remover(id);
  }
}

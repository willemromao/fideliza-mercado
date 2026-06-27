import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioRepository } from './usuario.repository';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    await this.usuarioRepository.upsert(createUsuarioDto);
  }

  async findAll() {
    return await this.usuarioRepository.listarTodos();
  }

  async findOne(id: number) {
    return await this.usuarioRepository.buscarPorId(id);
  }

  async update(updateUsuarioDto: UpdateUsuarioDto) {
    await this.usuarioRepository.upsert(updateUsuarioDto);
  }

  async remove(id: number) {
    await this.usuarioRepository.remover(id);
  }
}

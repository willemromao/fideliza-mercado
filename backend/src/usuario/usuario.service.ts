import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioRepository } from './usuario.repository';
import { TipoUsuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = { ...createUsuarioDto };

    if (usuario.tipoUsuario === TipoUsuario.ADMIN) {
      usuario.preferencias = undefined;
      usuario.pontos = undefined;
    }

    await this.usuarioRepository.upsert(usuario);
  }

  async findAll() {
    return await this.usuarioRepository.listarTodos();
  }

  async findOne(id: number) {
    return await this.usuarioRepository.buscarPorId(id);
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    await this.usuarioRepository.upsert({ ...updateUsuarioDto, id });
  }

  async remove(id: number) {
    await this.usuarioRepository.remover(id);
  }
}

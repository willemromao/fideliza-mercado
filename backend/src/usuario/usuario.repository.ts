import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoUsuario, Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioRepository {
  constructor(
    @InjectRepository(Usuario)
    private repository: Repository<Usuario>,
  ) {}

  async upsert(dados: Partial<Usuario>): Promise<void> {
    await this.repository.upsert(dados, ['id']);
  }

  async listarTodos(): Promise<Usuario[]> {
    return this.repository.find();
  }

  async listarTodosOsClientes(): Promise<Usuario[]> {
    return this.repository.find({
      where: { tipoUsuario: TipoUsuario.CLIENTE },
    });
  }

  async listarTodosOsAdministradores(): Promise<Usuario[]> {
    return this.repository.find({ where: { tipoUsuario: TipoUsuario.ADMIN } });
  }

  async buscarPorId(id: number): Promise<Usuario | null> {
    return this.repository.findOne({ where: { id } });
  }

  async remover(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

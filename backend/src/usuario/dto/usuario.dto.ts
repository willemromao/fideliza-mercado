import { TipoUsuario } from '../entities/usuario.entity';

export class UsuarioDto {
  id?: number;

  nome!: string;

  email!: string;

  senha!: string;

  ativo!: boolean;

  preferencias?: string[];

  pontos?: number;

  tipoUsuario!: TipoUsuario;
}

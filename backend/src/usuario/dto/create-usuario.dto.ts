import { OmitType } from '@nestjs/swagger';
import { UsuarioDto } from './usuario.dto';

export class CreateUsuarioDto extends OmitType(UsuarioDto, [
  'id',
  'criadoEm',
  'atualizadoEm',
  'deletadoEm',
] as const) {}

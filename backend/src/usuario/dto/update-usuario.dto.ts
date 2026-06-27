import { OmitType, PartialType } from '@nestjs/swagger';
import { UsuarioDto } from './usuario.dto';

export class UpdateUsuarioDto extends PartialType(
  OmitType(UsuarioDto, [
    'id',
    'criadoEm',
    'atualizadoEm',
    'deletadoEm',
  ] as const),
) {}

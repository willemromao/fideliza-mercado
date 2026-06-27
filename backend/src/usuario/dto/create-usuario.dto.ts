import { OmitType } from '@nestjs/mapped-types';
import { UsuarioDto } from './usuario.dto';

export class CreateUsuarioDto extends OmitType(UsuarioDto, ['id'] as const) {}

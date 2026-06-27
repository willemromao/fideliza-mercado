import { OmitType } from '@nestjs/swagger';
import { ReceitaDto } from './receita.dto';

export class CreateReceitaDto extends OmitType(ReceitaDto, [
  'id',
  'criadoEm',
  'atualizadoEm',
  'deletadoEm',
] as const) {}

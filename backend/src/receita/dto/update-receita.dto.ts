import { OmitType, PartialType } from '@nestjs/swagger';
import { ReceitaDto } from './receita.dto';

export class UpdateReceitaDto extends PartialType(
  OmitType(ReceitaDto, [
    'id',
    'criadoEm',
    'atualizadoEm',
    'deletadoEm',
  ] as const),
) {}

import { OmitType, PartialType } from '@nestjs/swagger';
import { ReceitaDto } from './receita.dto';

export class UpdateReceitaDto extends PartialType(
  OmitType(ReceitaDto, [] as const),
) {}

import { OmitType } from '@nestjs/swagger';
import { ProdutoDto } from './produto.dto';

export class CreateProdutoDto extends OmitType(ProdutoDto, [
  'id',
  'criadoEm',
  'atualizadoEm',
  'deletadoEm',
] as const) {}

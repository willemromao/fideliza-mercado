import { OmitType, PartialType } from '@nestjs/swagger';
import { ProdutoDto } from './produto.dto';

export class UpdateProdutoDto extends PartialType(
  OmitType(ProdutoDto, [
    'id',
    'criadoEm',
    'atualizadoEm',
    'deletadoEm',
  ] as const),
) {}

import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Length, Min } from 'class-validator';

export class ConcluirReceitaDto {
  @ApiProperty({ description: 'ID do cliente que está concluindo a receita' })
  @IsInt()
  @Min(1)
  usuarioId!: number;

  @ApiProperty({ description: 'ID da venda enviada ao cliente' })
  @IsString()
  @Length(1, 255)
  vendaId!: string;
}

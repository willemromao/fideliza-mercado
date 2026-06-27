import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { medidaUnidade, tipoUnidade } from '../entities/produto.entity';

export class ProdutoDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  id?: number;

  @ApiProperty()
  @IsString()
  @Length(1, 255)
  nome!: string;

  @ApiProperty()
  @IsInt()
  @Min(1)
  idCategoria!: number;

  @ApiProperty()
  @IsString()
  @Length(1, 255)
  descricao!: string;

  @ApiProperty()
  @IsString()
  @Length(1, 255)
  marca!: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  @IsString({ each: true })
  alergenos!: string[];

  @ApiProperty({ enum: tipoUnidade })
  @IsEnum(tipoUnidade)
  tipoUnidade!: tipoUnidade;

  @ApiProperty({ enum: medidaUnidade })
  @IsEnum(medidaUnidade)
  medidaUnidade!: medidaUnidade;

  @ApiProperty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  preco!: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  precoPromocional?: number;

  @ApiProperty()
  @IsBoolean()
  ativo!: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  criadoEm?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  atualizadoEm?: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  deletadoEm?: Date;
}

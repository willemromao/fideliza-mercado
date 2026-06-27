import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { tipoDificuldade } from '../entities/receita.entity';

export class ReceitaDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  id?: number;

  @ApiProperty()
  @IsString()
  @Length(1, 255)
  titulo!: string;

  @ApiProperty()
  @IsString()
  @Length(1, 5000)
  descricao!: string;

  @ApiProperty()
  @IsInt()
  @Min(0)
  pontosRecompensa!: number;

  @ApiProperty()
  @IsString()
  modoPreparo!: string;

  @ApiProperty()
  @IsInt()
  @Min(1)
  tempoPreparo!: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  porcao!: number;

  @ApiProperty()
  @IsString()
  @Length(1, 255)
  categoria!: string;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  imagem?: string;

  @ApiProperty({ enum: tipoDificuldade })
  @IsEnum(tipoDificuldade)
  dificuldade!: tipoDificuldade;

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

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { TipoUsuario } from '../entities/usuario.entity';

export class UsuarioDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  id?: number;

  @ApiProperty()
  @IsString()
  @Length(3, 255)
  nome!: string;

  @ApiProperty()
  @IsEmail()
  @Length(3, 255)
  email!: string;

  @ApiProperty()
  @IsString()
  @Length(6, 255)
  senha!: string;

  @ApiProperty()
  @IsBoolean()
  ativo!: boolean;

  @ApiPropertyOptional({ type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  preferencias?: string[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsInt()
  @Min(0)
  pontos?: number;

  @ApiProperty({ enum: TipoUsuario })
  @IsEnum(TipoUsuario)
  tipoUsuario!: TipoUsuario;

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

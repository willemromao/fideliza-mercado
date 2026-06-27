import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiOperation } from 'node_modules/@nestjs/swagger/dist/decorators/api-operation.decorator';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @ApiOperation({ summary: 'Criar Usuario' })
  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return await this.usuarioService.create(createUsuarioDto);
  }

  @ApiOperation({ summary: 'Listar todos os usuarios' })
  @Get()
  async findAll() {
    return await this.usuarioService.findAll();
  }

  @ApiOperation({ summary: 'Buscar um usuario por ID' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usuarioService.findOne(+id);
  }

  @ApiOperation({ summary: 'Atualizar um usuario' })
  @Patch(':id')
  async update(
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return await this.usuarioService.update(updateUsuarioDto);
  }

  @ApiOperation({ summary: 'Remover um usuario' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usuarioService.remove(+id);
  }
}

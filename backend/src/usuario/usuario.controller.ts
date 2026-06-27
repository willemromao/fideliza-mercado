import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@ApiTags('usuario')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @ApiOperation({ summary: 'Criar Usuario' })
  @ApiBody({ type: CreateUsuarioDto })
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
  @ApiParam({ name: 'id', description: 'ID do usuario' })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.usuarioService.findOne(id);
  }

  @ApiOperation({ summary: 'Atualizar um usuario' })
  @ApiParam({ name: 'id', description: 'ID do usuario' })
  @ApiBody({ type: UpdateUsuarioDto })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return await this.usuarioService.update(id, updateUsuarioDto);
  }

  @ApiOperation({ summary: 'Remover um usuario' })
  @ApiParam({ name: 'id', description: 'ID do usuario' })
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.usuarioService.remove(id);
  }
}

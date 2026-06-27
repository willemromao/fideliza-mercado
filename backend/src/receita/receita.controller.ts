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
import { ReceitaService } from './receita.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { ConcluirReceitaDto } from './dto/concluir-receita.dto';

@ApiTags('receita')
@Controller('receita')
export class ReceitaController {
  constructor(private readonly receitaService: ReceitaService) {}

  @ApiOperation({ summary: 'Criar receita' })
  @ApiBody({ type: CreateReceitaDto })
  @Post()
  create(@Body() createReceitaDto: CreateReceitaDto) {
    return this.receitaService.create(createReceitaDto);
  }

  @ApiOperation({ summary: 'Listar todas as receitas' })
  @Get()
  findAll() {
    return this.receitaService.findAll();
  }

  @ApiOperation({ summary: 'Buscar uma receita por ID' })
  @ApiParam({ name: 'id', description: 'ID da receita' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.receitaService.findOne(id);
  }

  @ApiOperation({
    summary: 'Renderizar receita com ingredientes e produtos vinculados',
  })
  @ApiParam({ name: 'id', description: 'ID da receita' })
  @Get(':id/completa')
  renderizarCompleta(@Param('id', ParseIntPipe) id: number) {
    return this.receitaService.renderizarReceitaCompleta(id);
  }

  @ApiOperation({
    summary: 'Validar receita concluída com base na venda simulada',
  })
  @ApiParam({ name: 'id', description: 'ID da receita' })
  @ApiBody({ type: ConcluirReceitaDto })
  @Post(':id/concluir')
  concluirReceita(
    @Param('id', ParseIntPipe) id: number,
    @Body() concluirReceitaDto: ConcluirReceitaDto,
  ) {
    return this.receitaService.concluirReceita(id, concluirReceitaDto);
  }

  @ApiOperation({ summary: 'Atualizar uma receita' })
  @ApiParam({ name: 'id', description: 'ID da receita' })
  @ApiBody({ type: UpdateReceitaDto })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReceitaDto: UpdateReceitaDto,
  ) {
    return this.receitaService.update(id, updateReceitaDto);
  }

  @ApiOperation({ summary: 'Remover uma receita' })
  @ApiParam({ name: 'id', description: 'ID da receita' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.receitaService.remove(id);
  }
}

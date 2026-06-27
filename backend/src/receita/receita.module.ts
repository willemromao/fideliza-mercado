import { Module } from '@nestjs/common';
import { ReceitaService } from './receita.service';
import { ReceitaController } from './receita.controller';
import { ReceitaRepository } from './receita.repository';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Receita } from './entities/receita.entity';
import { ReceitaIngrediente } from './entities/receita-ingredientes.entity';
import { ReceitaConcluida } from './entities/receita-concluida.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Produto } from '../produto/entities/produto.entity';
import { UsuarioRepository } from '../usuario/usuario.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Receita,
      ReceitaIngrediente,
      ReceitaConcluida,
      Usuario,
      Produto,
    ]),
  ],
  controllers: [ReceitaController],
  providers: [ReceitaService, ReceitaRepository, UsuarioRepository],
})
export class ReceitaModule {}

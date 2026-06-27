import { Module } from '@nestjs/common';
import { ReceitaService } from './receita.service';
import { ReceitaController } from './receita.controller';
import { ReceitaRepository } from './receita.repository';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Receita } from './entities/receita.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Receita])],
  controllers: [ReceitaController],
  providers: [ReceitaService, ReceitaRepository],
})
export class ReceitaModule {}

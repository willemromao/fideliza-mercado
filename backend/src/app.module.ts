import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdutoModule } from './produto/produto.module';
import { ReceitaModule } from './receita/receita.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ?? 'localhost',
      port: Number(process.env.DB_PORT ?? 5432),
      username: process.env.DB_USERNAME ?? 'postgres',
      password: process.env.DB_PASSWORD ?? 'postgres',
      database: process.env.DB_NAME ?? 'clube_sabor',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.DB_SYNCHRONIZE
        ? process.env.DB_SYNCHRONIZE === 'true'
        : process.env.NODE_ENV !== 'production',
      logging: process.env.DB_LOGGING === 'true',
      retryAttempts: 10,
      retryDelay: 3000,
      autoLoadEntities: true,
    }),
    UsuarioModule,
    ProdutoModule,
    ReceitaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

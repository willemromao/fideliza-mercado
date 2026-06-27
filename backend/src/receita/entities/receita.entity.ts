import { Column, PrimaryGeneratedColumn } from 'typeorm';

export enum tipoDificuldade {
  FACIL = 'facil',
  MEDIO = 'medio',
  DIFICIL = 'dificil',
}

export class Receita {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'nome', type: 'varchar', length: 255 })
  titulo!: string;

  @Column({ name: 'descricao', type: 'text' })
  descricao!: string;

  @Column({ name: 'pontos_recompensa', type: 'int' })
  pontosRecompensa!: number;

  @Column({ name: 'modo_preparo', type: 'text' })
  modoPreparo!: string;

  @Column({ name: 'tempo_preparo', type: 'int' })
  tempoPreparo!: number;

  @Column({ name: 'porcao', type: 'int' })
  porcao!: number;

  @Column({ name: 'categoria', type: 'varchar', length: 255 })
  categoria!: string;

  @Column({ name: 'tags', type: 'simple-array', nullable: true })
  tags?: string[];

  @Column({ name: 'imagem', type: 'varchar', length: 255, nullable: true })
  imagem?: string;

  @Column({ name: 'dificuldade', type: 'enum', enum: tipoDificuldade })
  dificuldade!: tipoDificuldade;

  @Column({ name: 'criado_em', type: 'timestamp' })
  criadoEm!: Date;

  @Column({ name: 'atualizado_em', type: 'timestamp', nullable: true })
  atualizadoEm!: Date;

  @Column({ name: 'deletado_em', type: 'timestamp', nullable: true })
  deletadoEm!: Date;
}

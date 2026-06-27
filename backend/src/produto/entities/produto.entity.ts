import { Column, PrimaryGeneratedColumn } from 'typeorm';

export enum tipoUnidade {
  PESO = 'PESO',
  VOLUME = 'VOLUME',
  UNIDADE = 'UNIDADE',
}

export enum medidaUnidade {
  UNIDADE = 'UNIDADE',
  GRAMA = 'GRAMA',
  LITRO = 'LITRO',
  PACOTE = 'PACOTE',
  FRASCO = 'FRASCO',
  POTE = 'POTE',
  SACHÊ = 'SACHÊ',
  KILO = 'KILO',
}

export class Produto {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id!: number;

  @Column({ name: 'nome', type: 'varchar', length: 255 })
  nome!: string;

  @Column({ name: 'id_categoria', type: 'int' })
  idCategoria!: number;

  @Column({ name: 'descricao', type: 'varchar', length: 255 })
  descricao!: string;

  @Column({ name: 'marca', type: 'varchar', length: 255 })
  marca!: string;

  @Column({ name: 'alergenos', type: 'varchar', length: 255 })
  alergenos!: string[];

  @Column({ name: 'tipo_unidade', type: 'enum', enum: tipoUnidade })
  tipoUnidade!: tipoUnidade;

  @Column({ name: 'medida_unidade', type: 'enum', enum: medidaUnidade })
  medidaUnidade!: medidaUnidade;

  @Column({ name: 'preco', type: 'decimal', precision: 10, scale: 2 })
  preco!: number;

  @Column({
    name: 'preco_promocional',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  precoPromocional!: number;

  @Column({ name: 'ativo', type: 'boolean', default: true })
  ativo!: boolean;

  @Column({ name: 'criado_em', type: 'timestamp' })
  criadoEm!: Date;

  @Column({ name: 'atualizado_em', type: 'timestamp', nullable: true })
  atualizadoEm!: Date;

  @Column({ name: 'deletado_em', type: 'timestamp', nullable: true })
  deletadoEm!: Date;
}

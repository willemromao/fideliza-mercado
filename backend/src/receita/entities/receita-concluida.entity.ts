import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Receita } from './receita.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

export enum StatusReceitaConcluida {
  VALIDA = 'valida',
  INVALIDA = 'invalida',
}

@Entity({ name: 'receitas_concluidas' })
export class ReceitaConcluida {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Receita, { eager: true })
  @JoinColumn({ name: 'receita_id' })
  receita!: Receita;

  @ManyToOne(() => Usuario, { eager: true })
  @JoinColumn({ name: 'usuario_id' })
  usuario!: Usuario;

  @Column({ name: 'venda_id', type: 'varchar', length: 255 })
  vendaId!: string;

  @Column({ name: 'status', type: 'enum', enum: StatusReceitaConcluida })
  status!: StatusReceitaConcluida;

  @Column({ name: 'pontos_concedidos', type: 'int', default: 0 })
  pontosConcedidos!: number;

  @Column({
    name: 'ingredientes_comprados',
    type: 'simple-array',
    nullable: true,
  })
  ingredientesComprados?: string[];

  @Column({
    name: 'ingredientes_faltantes',
    type: 'simple-array',
    nullable: true,
  })
  ingredientesFaltantes?: string[];

  @Column({ name: 'motivo_rejeicao', type: 'text', nullable: true })
  motivoRejeicao?: string;

  @Column({
    name: 'criado_em',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  criadoEm!: Date;
}

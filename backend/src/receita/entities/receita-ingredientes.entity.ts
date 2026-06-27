import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Receita } from './receita.entity';
import { Produto } from '../../produto/entities/produto.entity';

@Entity({ name: 'receita_ingredientes' })
export class ReceitaIngrediente {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Receita, (receita) => receita.ingredientes)
  receita!: Receita;

  @ManyToOne(() => Produto)
  @JoinColumn({ name: 'produto_id' })
  produto!: Produto;

  @Column({ name: 'unidade', type: 'varchar', length: 255 })
  unidade!: string;

  @Column({ name: 'opcional', type: 'boolean' })
  opcional!: boolean;

  @Column({ name: 'notas', type: 'text' })
  notas?: string;
}

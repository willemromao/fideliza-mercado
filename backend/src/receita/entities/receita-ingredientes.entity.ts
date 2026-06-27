import { Column, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Receita } from './receita.entity';
import { Produto } from 'src/produto/entities/produto.entity';

export class ReceitaIngrediente {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToMany(() => Receita)
  receita!: Receita;

  @OneToOne(() => Produto)
  produto!: Produto;

  @Column({ name: 'unidade', type: 'varchar', length: 255 })
  unidade!: string;

  @Column({ name: 'opcional', type: 'boolean' })
  opcional!: boolean;

  @Column({ name: 'notas', type: 'text' })
  notas?: string;
}

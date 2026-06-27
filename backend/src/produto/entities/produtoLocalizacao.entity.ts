import { Column, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produto.entity';

export class ProdutoLocalizacao {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id!: number;

  @OneToMany(() => Produto, (produto) => produto.id)
  @JoinColumn({ name: 'produto_id', referencedColumnName: 'id' })
  produto!: Produto;

  @Column({ name: 'corredor', type: 'varchar', length: 255 })
  corredor!: string;

  @Column({ name: 'secao', type: 'varchar', length: 255 })
  secao!: string;

  @Column({ name: 'nome', type: 'timestamp', nullable: true })
  atualizadoEm!: Date;
}

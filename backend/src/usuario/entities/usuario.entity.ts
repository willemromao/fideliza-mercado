import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

export enum TipoUsuario {
  ADMIN = 'admin',
  CLIENTE = 'cliente',
}

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'nome', type: 'varchar', length: 255 })
  nome!: string;

  @Column({ name: 'email', type: 'varchar', length: 255 })
  email!: string;

  @Column({ name: 'senha', type: 'varchar', length: 255 })
  senha!: string;

  @Column({ name: 'ativo', type: 'boolean' })
  ativo!: boolean;

  @Column({ name: 'preferencias', type: 'simple-array', nullable: true })
  preferencias?: string[];

  @Column({ name: 'pontos', type: 'int', nullable: true })
  pontos?: number;

  @Column({
    name: 'tipo_usuario',
    type: 'enum',
    enum: TipoUsuario,
  })
  tipoUsuario!: TipoUsuario;
}

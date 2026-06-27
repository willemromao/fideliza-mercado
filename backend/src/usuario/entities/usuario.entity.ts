import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

export enum TipoUsuario {
    ADMIN = 'admin',
    USUARIO = 'usuario'
}

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    ativo: boolean;

    @Column("simple-array")
    preferencias: string[];

    @Column()
    pontos: number;

    @Column({
        type: "enum",
        enum: TipoUsuario,
        default: TipoUsuario.USUARIO
    })
    tipoUsuario: TipoUsuario;
}

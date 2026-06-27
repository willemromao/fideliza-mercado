export class ProdutoDto {
  id?: number;

  nome!: string;

  email!: string;

  senha!: string;

  ativo!: boolean;

  preferencias?: string[];

  pontos?: number;
}

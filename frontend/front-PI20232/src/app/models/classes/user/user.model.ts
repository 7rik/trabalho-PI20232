export class UserModel {
  id: number | null;
  login: string;
  senha: string;
  nome: string;
  ativo: boolean;
  isAdmin: boolean;
  dataNascimento: Date | null;
  dataCadastro: Date | null;

  constructor(obj?: UserModel) {
    this.id             = obj?.id             || null;
    this.login          = obj?.login          || '';
    this.senha          = obj?.senha          || '';
    this.nome           = obj?.nome           || '';
    this.ativo          = obj?.ativo          || true;
    this.isAdmin        = obj?.isAdmin        || false;
    this.dataNascimento = obj?.dataNascimento || null;
    this.dataCadastro   = obj?.dataCadastro   || null;
  }
}

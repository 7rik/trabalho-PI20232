export interface UserModel {
  id: number | string;
  login: string;
  senha: string;
  nome: string;
  ativo: boolean;
  isAdmin: boolean;
}

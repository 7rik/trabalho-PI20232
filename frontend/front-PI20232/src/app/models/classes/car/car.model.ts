export class CarModel {
  id: number | null;
  marca: string;
  modelo: string;
  descricao: string;
  anoFabricacao: number | null;
  anoModelo: number | null;
  valor: number | null;

  constructor(obj?: CarModel) {
    this.id                  = obj?.id                || null;
    this.marca               = obj?.marca             || '';
    this.modelo              = obj?.modelo            || '';
    this.descricao           = obj?.descricao         || '';
    this.anoFabricacao       = obj?.anoFabricacao     || null;
    this.anoModelo           = obj?.anoModelo         || null;
    this.valor               = obj?.valor             || null;
  }
}

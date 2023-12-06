export class CarModel {
  id: number | null;
  marca: string;
  modelo: string;
  descricao: string;
  anoDeFabricacao: number | null;
  anoDoModelo: number | null;
  valor: number | null;
  foto: string;

  constructor(obj?: CarModel) {
    this.id                  = obj?.id                  || null;
    this.marca               = obj?.marca               || '';
    this.modelo              = obj?.modelo              || '';
    this.descricao           = obj?.descricao           || '';
    this.anoDeFabricacao     = obj?.anoDeFabricacao     || null;
    this.anoDoModelo         = obj?.anoDoModelo         || null;
    this.valor               = obj?.valor               || null;
    this.foto                = obj?.foto                || '';
  }
}

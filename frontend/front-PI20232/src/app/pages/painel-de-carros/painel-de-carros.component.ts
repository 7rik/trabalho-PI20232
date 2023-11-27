import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/interfaces/user/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-painel-de-carros',
  templateUrl: './painel-de-carros.component.html',
  styleUrls: ['./painel-de-carros.component.css']
})
export class PainelDeCarrosComponent {

  public carrosSemInteressados: any = [];
  public carros = [
    {
      id: 1,
      nome: "Ford Ranger",
      info: {
      ano: 2020,
      quilometragem: 32000,
      tipoCombustivel: "Gasolina",
      cambio: "Automático",
      lugares: 5,
      cor: "Azul claro",
      },
      preco: 1000,
      foto: "/assets/images/ford_ranger.png",
      descricao: "Ford Ranger foi fabricada para ser a escolha ideal para quem busca um carro forte, " +
                  "para andar em qualquer terreno e com um design moderno e encantador.",
      alugado: false,
      interessadoId: null,
      tipoId: 2,
      criado: "2017-01-01T00:00:00.000Z"
    },{
      id: 2,
      info: {
        ano: 2022,
        quilometragem: 1000,
        tipoCombustivel: "Diesel",
        cambio: "Automático",
        lugares: 5,
        cor: "Marrom",
        },
      nome: "Toyota Tundra",
      preco: 1000,
      foto: "/assets/images/toyota_tundra.png",
      descricao: "Toyota Tundra é um carro frabricado para andar no bioma das Florestas Tundras." +
                  "Portanto, pode esperar dela muita força, aderência e uma potência sem igual.",
      vendido: false,
      interessadoId: null,
      tipoId: 2,
      criado: "2017-01-01T00:00:00.000Z",
    },{
      id: 3,
      nome: "Jaguar XF",
      info: {
        ano: 2018,
        quilometragem: 45000,
        tipoCombustivel: "Gasolina",
        cambio: "Automático",
        lugares: 5,
        cor: "Prata",
        },
      preco: 1000,
      foto: "/assets/images/jaguar_XF.png",
      descricao: " Jaguar XF foi fabricado para ser um carro de presença e notado por onde passar." +
                  "Com um design sem igual e potência esportiva, você pode desfrutar ainda de uma gama" +
                  "de tecnologia embarcada de ponta.",
      vendido: false,
      interessadoId: null,
      tipoId: 4,
      criado: "2017-01-01T00:00:00.000Z"
    },{
      id: 4,
      nome: "Toyota Corolla",
      info: {
        ano: 2023,
        quilometragem: 0,
        tipoCombustivel: "Hibrido",
        cambio: "Automático",
        lugares: 5,
        cor: "Branco",
        },
      preco: 1000,
      foto: "/assets/images/toyota_corolla.png",
      descricao: "Toyota Corolla foi fabricado para andar nas grandes cidades com máximo de conforto," +
                  "porém,sem abrir mão de um toque esportivo, um design moderno e encantador.",
      vendido: false,
      interessadoId: null,
      tipoId: 4,
      criado: "2017-01-01T00:00:00.000Z"
    },{
      id: 5,
      nome: "Volkswagen Polo",
      info: {
        ano: 2022,
        quilometragem: 4600,
        tipoCombustivel: "Flex",
        cambio: "Manual",
        lugares: 5,
        cor: "Vermelho",
        },
      preco: 1000,
      foto: "/assets/images/volkswagen_polo.png",
      descricao: "Com excelente desempenho e tecnologias inovadoras," +
                  "o Polo certamente é uma das melhores opções no seguimento" +
                  "Hatch no Brasil.",
      vendido: false,
      interessadoId: null,
      tipoId: 1,
      criado: "2017-01-01T00:00:00.000Z"
    },{
      id: 6,
      nome: "Peugeot 208",
      info: {
        ano: 2022,
        quilometragem: 10880,
        tipoCombustivel: "Flex",
        cambio: "Automático",
        lugares: 5,
        cor: "Cinza",
        },
      preco: 1000,
      foto: "/assets/images/peugeot_208.png",
      descricao: "O Peugeot 208 é com certeza na sua categoria, uma das melhores opções." +
                  "Com muita tecnologia embarcada, potênia e uma design de tirar o fôlego," +
                  "além de uma segurança invejável.",
      interessadoId: null,
      tipoId: 1,
      criado: "2017-01-01T00:00:00.000Z"
    },{
      id: 7,
      nome: "Fiat Argo",
      info: {
        ano: 2021,
        quilometragem: 34780,
        tipoCombustivel: "Flex",
        cambio: "Manual",
        lugares: 5,
        cor: "Branco",
        },
      preco: 1000,
      foto: "/assets/images/fiat_argo.png",
      descricao: " O Fiat Argo fo frabricado para quem busca conforto mesmo em" +
                  "um carro de entrada. É silencioso, com uma ótima direção e" +
                  "com uma econômia de conbustível invejável.",
      vendido: false,
      interessadoId: null,
      tipoId: 1,
      criado: "2017-01-01T00:00:00.000Z"
    },{
      id: 8,
      nome: "Fiat Mobi",
      info: {
        ano: 2018,
        quilometragem: 61900,
        tipoCombustivel: "Flex",
        cambio: "Manual",
        lugares: 5,
        cor: "Ciano",
        },
      preco: 1000,
      foto: "/assets/images/fiat_mobi.png",
      descricao: "Fiat Mobi é um carro de entrada, porém, com um design moderno." +
                  "Possui traseira de porta malas em vidro, algo inovador no seguimento," +
                  "pois, trás segurança em casos de acidentes.",
      vendido: false,
      interessadoId: null,
      tipoId: 1,
      criado: "2017-01-01T00:00:00.000Z"
    },{
      id: 9,
      nome: "SW4",
      info: {
      ano: 2021,
      quilometragem: 22000,
      tipoCombustivel: "Diesel",
      cambio: "Automático",
      lugares: 7,
      cor: "Preto",
      },
      preco: 1000,
      foto: "/assets/images/toyota_sw4.png",
      descricao: "Toyota SW4 foi fabricada para ser um SUV legítimo com conforto, tecnologia de ponta " +
                  "e um porta malas gigante. Além de toda a potência e força de um carro 4x4.",
      alugado: false,
      interessadoId: null,
      tipoId: 3,
      criado: "2017-01-01T00:00:00.000Z"
    },
    {
      id: 10,
      nome: "T-Cross",
      info: {
      ano: 2021,
      quilometragem: 22000,
      tipoCombustivel: "Gasolina",
      cambio: "Automático",
      lugares: 5,
      cor: "Prata",
      },
      preco: 1000,
      foto: "/assets/images/volkswagen_t-cross.png",
      descricao: "Toyota SW4 foi fabricada para ser um SUV legítimo com conforto, tecnologia de ponta " +
                  "e um porta malas gigante. Além de toda a potência e força de um carro 4x4.",
      alugado: false,
      interessadoId: null,
      tipoId: 3,
      criado: "2017-01-01T00:00:00.000Z"
    },
    {
      id: 11,
      nome: "Jeep Compass",
      info: {
      ano: 2021,
      quilometragem: 22000,
      tipoCombustivel: "Gasolina",
      cambio: "Automático",
      lugares: 5,
      cor: "Azul",
      },
      preco: 1000,
      foto: "/assets/images/jeep_compass.png",
      descricao: "Toyota SW4 foi fabricada para ser um SUV legítimo com conforto, tecnologia de ponta " +
                  "e um porta malas gigante. Além de toda a potência e força de um carro 4x4.",
      alugado: false,
      interessadoId: null,
      tipoId: 3,
      criado: "2017-01-01T00:00:00.000Z"
    },
    {
      id: 12,
      nome: "Jeep Renegade",
      info: {
      ano: 2021,
      quilometragem: 22000,
      tipoCombustivel: "Gasolina",
      cambio: "Automático",
      lugares: 5,
      cor: "Cinza Granite",
      },
      preco: 1000,
      foto: "/assets/images/jeep_renegade.png",
      descricao: "Toyota SW4 foi fabricada para ser um SUV legítimo com conforto, tecnologia de ponta " +
                  "e um porta malas gigante. Além de toda a potência e força de um carro 4x4.",
      alugado: false,
      interessadoId: null,
      tipoId: 3,
      criado: "2017-01-01T00:00:00.000Z"
    },
  ];

  public users: any = [];
  public tipos = [
    {nome: 'Hatch', id: 1},
    {nome: 'Picape', id: 2},
    {nome: 'Suv', id: 3},
    {nome: 'Sedan', id: 4},
  ]

  public isLogged = false;

  constructor(
    private _user: UserService,
  ) {
    this.carrosSemInteressados = this.carros.filter(carro => carro.interessadoId === null);
    this.getUsers();
  }

  gerarRelatorio() {
    let relatorio: any = '';

    this.users.forEach((user: UserModel) => {
      relatorio += user.id + ',' + user.nome + ',' + user.login + ',' + user.senha + '\n';
    });

    const blob = new Blob([relatorio], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

  private getUsers() {
    this._user.getUsers().subscribe({
      next: (response: any) => {
          this.users = response;
      }
    });
  }

  public filtro(tipoId: number) {
    if (tipoId === 0) {
      this.carrosSemInteressados = this.carros.filter(carro => carro.interessadoId === null);
    } else {
      this.carrosSemInteressados = this.carros.filter(carro => carro.interessadoId === null && carro.tipoId === tipoId);
    }
  }

  public pegarTipo(tipoId: number): string {
    return this.tipos.filter(tipo => tipo.id === tipoId)[0]['nome'];
  }
}

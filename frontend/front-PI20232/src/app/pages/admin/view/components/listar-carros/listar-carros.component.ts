import {  Component } from '@angular/core';
import { CarModel } from 'src/app/models/classes/car/car.model';
import { CarService } from 'src/app/services/user/car.service';


@Component({
  selector: 'app-listar-carros',
  templateUrl: './listar-carros.component.html',
})
export class ListarCarrosComponent {
  displayedColumns: string[] = ['modelo', 'marca', 'ano', 'interessados', 'actions'];
  dataSource = [];

  constructor(
    private carros: CarService
  ){
    this.getCarros();
  }

  private getCarros() {
    this.carros.getAllCars().subscribe({
      next: (response: any) => {
        this.dataSource = response;
      },
    });
  }

  public deleteCarro(carro: CarModel) {
    this.carros.deleteCar(carro.id).subscribe({
      next: (response: any) => {
        this.getCarros();
      },
    });
  }
 }

import {  Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarModel } from 'src/app/models/classes/car/car.model';
import { CarService } from 'src/app/services/user/car.service';
import { EditCarrosComponent } from './edit-carros/edit-carros.component';


@Component({
  selector: 'app-listar-carros',
  templateUrl: './listar-carros.component.html',
})
export class ListarCarrosComponent {
  displayedColumns: string[] = ['modelo', 'marca', 'ano', 'interessados', 'actions'];
  dataSource = [];

  constructor(
    private carros: CarService,
    private dialog: MatDialog
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

  public newCar() {
    const dialogRef = this.dialog.open(EditCarrosComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getCarros();
      }
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
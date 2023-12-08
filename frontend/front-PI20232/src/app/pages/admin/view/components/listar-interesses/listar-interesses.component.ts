import {  Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarModel } from 'src/app/models/classes/car/car.model';
import { CarService } from 'src/app/services/car/car.service';
import { EditInteressesComponent } from './edit-interesses/edit-interesses.component';
import { InfoInteressesComponent } from './info-interesses/info-interesses.component';
import { UserModel } from 'src/app/models/classes/user/user.model';


@Component({
  selector: 'app-listar-interesses',
  templateUrl: './listar-interesses.component.html',
})
export class ListarInteressesComponent {
  displayedColumns: string[] = ['interessado', 'modelo', 'marca', 'actions'];
  dataSource = [];

  constructor(
    public interesses: CarService,
    private dialog: MatDialog,
  ){
    this.getInteresses();
  }

  private getInteresses() {
    this.interesses.getAllCars().subscribe({
      next: (response: any) => {
        if(response){
          this.dataSource = response.filter((car: CarModel) => car.interessado != null);
        }
      },
    });
  }


  public openEdit(car: CarModel) {
    const dialogRef = this.dialog.open(EditInteressesComponent, {
      data: car,
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getInteresses();
      }
    });
  }

  public openInfo(car: CarModel) {
    const dialogRef = this.dialog.open(InfoInteressesComponent, {
      data: car,
      minWidth: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getInteresses();
      }
    });
  }

  public removerInteresse(car: CarModel, interessado: UserModel) {
    this.interesses.removerInteresse(car.id, interessado.id).subscribe({
      next: (response: any) => {
        console.log(response);
        this.getInteresses();
      },
    });
  }
}


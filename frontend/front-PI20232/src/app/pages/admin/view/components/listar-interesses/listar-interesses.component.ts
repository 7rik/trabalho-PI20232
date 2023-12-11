import {  Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarModel } from 'src/app/models/classes/car/car.model';
import { CarService } from 'src/app/services/car/car.service';
import { InfoInteressesComponent } from './info-interesses/info-interesses.component';
import { UserModel } from 'src/app/models/classes/user/user.model';
import { TicketService } from 'src/app/shared/services/ticket.service';


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
    private user: TicketService,
  ){
    this.getInteresses();
  }

  public getInteresses() {
    this.interesses.getAllInterestedCars().subscribe({
      next: (response: any) => {
        if(response){
          this.dataSource = response;
        }
      },
      error: (error: any) => {
        console.log(error);
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
    this.interesses.removerInteresse(car.id, interessado?.id).subscribe({
      next: (response: any) => {
        this.getInteresses();
      },
    });
  }

  public verificacaoUsuario() {
    return this.user.getUser()?.isAdmin === true;
  }
}


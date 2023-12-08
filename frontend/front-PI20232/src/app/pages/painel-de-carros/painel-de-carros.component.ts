import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarModel } from 'src/app/models/classes/car/car.model';
import { UserModel } from 'src/app/models/classes/user/user.model';
import { CarService } from 'src/app/services/car/car.service';
import { TicketService } from 'src/app/shared/services/ticket.service';

@Component({
  selector: 'app-painel-de-carros',
  templateUrl: './painel-de-carros.component.html',
  styleUrls: ['./painel-de-carros.component.css']
})
export class PainelDeCarrosComponent {

  public carros: CarModel[] = [];

  public users: any = [];

  public isLogged = false;
  public user: UserModel = new UserModel();

  constructor(
    private ticket: TicketService,
    private car: CarService
  ) {
    this.getAllCars();
    this.isLogged = this.ticket.isLogged();
    this.user = this.ticket.getUser();
  }


  private getAllCars() {
    this.car.getAllPublicCars().subscribe({
      next: (response: any) => {
        this.carros = response;
      },
    });
  }

  public updateInteresse(carro: CarModel){
    this.car.interesseCar(carro.id, this.user.id).subscribe({
      next: (response: any) => {
        this.getAllCars();
      },
    });
  }

  public onLogout(): void {
    this.ticket.onLogout();
    this.isLogged = false;
  }
}

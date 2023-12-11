import {  Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CarModel } from 'src/app/models/classes/car/car.model';

@Component({
  selector: 'app-info-carros',
  templateUrl: './info-carros.component.html'
})
export class InfoCarrosComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CarModel,
  ) {}

 }

import {  Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CarModel } from 'src/app/models/classes/car/car.model';

@Component({
  selector: 'app-info-interesses',
  templateUrl: './info-interesses.component.html'
})
export class InfoInteressesComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CarModel,
  ) {}

 }

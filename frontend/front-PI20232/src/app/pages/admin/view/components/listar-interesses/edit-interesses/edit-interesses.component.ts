import {  Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CarModel } from 'src/app/models/classes/car/car.model';
import { CarService } from 'src/app/services/car/car.service';
import { TicketService } from 'src/app/shared/services/ticket.service';

@Component({
  selector: 'app-edit-interesses',
  templateUrl: './edit-interesses.component.html'
})
export class EditInteressesComponent {
  public formRegistro: FormGroup;

  public car: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private ticket: TicketService,
    private carService: CarService,
    @Inject(MAT_DIALOG_DATA) public data: CarModel,
    private dialogRef: MatDialogRef<EditInteressesComponent>,
    ) {
      this.car = new CarModel(data);
      this.formRegistro = this.builderForm();
  }

  public save() {

    }


  private builderForm(): FormGroup {
    return this.fb.group({
      id:                 new FormControl({value: this.car.id,                disabled: false}),
      car:                new FormControl({value: this.car.car,               disabled: false},         Validators.required),
      user:               new FormControl({value: this.car.user,              disabled: false},         Validators.required),
     })
  }


}

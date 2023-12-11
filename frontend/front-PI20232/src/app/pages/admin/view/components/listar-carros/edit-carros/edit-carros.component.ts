import {  Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CarModel } from 'src/app/models/classes/car/car.model';
import { CarService } from 'src/app/services/car/car.service';
import { TicketService } from 'src/app/shared/services/ticket.service';

@Component({
  selector: 'app-edit-carros',
  templateUrl: './edit-carros.component.html'
})
export class EditCarrosComponent {
  public formRegistro: FormGroup;

  public car: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private carService: CarService,
    private ticket: TicketService,
    @Inject(MAT_DIALOG_DATA) public data: CarModel,
    private dialogRef: MatDialogRef<EditCarrosComponent>,
    ) {
      this.car = new CarModel(data);
      this.formRegistro = this.builderForm();
  }

  public save() {
    if(this.car.id){
      this.atualizar();
    }else{
      this.registrar();
    }
  }

  public convertBase64(event: any) {
    
    const file = event.target.files[0] as Blob;
    const reader = new FileReader();
    const imgBase64 = this;
    reader.readAsDataURL(file);
    reader.onloadend = () => {
    console.log(this.formRegistro.value)
    //this.formRegistro.get('foto').setValue(reader.result);
    console.log(reader.result);
    };

    // if (file) {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(file);
    //   reader.onloadend = () => {
    //     //this.formRegistro.get('foto').setValue(reader.result);
    //   };
    // }
  }

  private atualizar() {
    if (this.formRegistro.value && this.formRegistro.valid) {
      this.carService.updateCar(this.formRegistro.value)
      .subscribe({
        next: (response: any) => {
          if (response) {
            this.formRegistro.reset();
            this.dialogRef.close(true);
          }
        },
      });
    }
  }

  private registrar(): void {
    if (this.formRegistro.value && this.formRegistro.valid) {
      this.carService.createCar(this.formRegistro.value)
      .subscribe({
        next: (response: any) => {
          if (response) {
            console.log(response);
            this.formRegistro.reset();
            this.dialogRef.close(true);
          }
        },
      });
    }
  }

  private builderForm(): FormGroup {
    return this.fb.group({
      id:                   new FormControl({value: this.car.id,                  disabled: false}),
      marca:                new FormControl({value: this.car.marca,               disabled: false},         Validators.required),
      modelo:               new FormControl({value: this.car.modelo,              disabled: false},         Validators.required),
      descricao:            new FormControl({value: this.car.descricao,           disabled: false},         Validators.required),
      interessado:          new FormControl({value: this.car.interessado,         disabled: false}),
      anoDeFabricacao:      new FormControl({value: this.car.anoDeFabricacao,     disabled: false},         Validators.required),
      anoDoModelo:          new FormControl({value: this.car.anoDoModelo,         disabled: false},         Validators.required),
      valor:                new FormControl({value: this.car.valor,               disabled: false},         Validators.required),
      foto:                 new FormControl({value: this.car.foto,                disabled: false}),
     })
  }


}

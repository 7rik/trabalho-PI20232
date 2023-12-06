import {  Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/classes/user/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { TicketService } from 'src/app/shared/services/ticket.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html'
})
export class EditUsuarioComponent {
  public formRegistro: FormGroup;

  public user: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private ticket: TicketService,
    @Inject(MAT_DIALOG_DATA) public data: UserModel,
    private dialogRef: MatDialogRef<EditUsuarioComponent>,
    ) {
      this.user = new UserModel(data);
      this.formRegistro = this.builderForm();
  }

  public save() {
    if(this.user.id){
      this.atualizar();
    }else{
      this.registrar();
    }
  }

  private atualizar() {
    if (this.formRegistro.value && this.formRegistro.valid) {
      this.userService.updateUser(this.formRegistro.value)
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
      this.userService.signUpUser(this.formRegistro.value)
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

  private builderForm(): FormGroup {
    return this.fb.group({
      id:                 new FormControl({value: this.user.id,               disabled: false}),
      login:              new FormControl({value: this.user.login,            disabled: false},         Validators.required),
      nome:               new FormControl({value: this.user.nome,             disabled: false},         Validators.required),
      senha:              new FormControl({value: this.user.senha,            disabled: false},         Validators.required),
      dataNascimento:     new FormControl({value: this.user.dataNascimento,   disabled: false},         this.user ? null : Validators.required),
      ativo:              new FormControl({value: this.user.ativo,            disabled: false}),
      isAdmin:            new FormControl({value: this.user.isAdmin,          disabled: false}),
      dataCadastro:       new FormControl({value: this.user.dataCadastro,     disabled: false}),
     })
  }
}

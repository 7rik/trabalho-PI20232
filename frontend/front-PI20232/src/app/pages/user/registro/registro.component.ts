import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserModel } from 'src/app/models/classes/user/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { TicketService } from 'src/app/shared/services/ticket.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject();

  public formRegistro: FormGroup;

  public user: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private ticket: TicketService
    ) {
      this.user = new UserModel(ticket.getUser());
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
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response) {
            console.log(response);
            this.formRegistro.reset();
            this.router.navigate(['/painel-de-carros'])
          }
        },
      });
    }
  }

  private registrar(): void {
    if (this.formRegistro.value && this.formRegistro.valid) {
      this.userService.signUpUser(this.formRegistro.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response) {
            console.log(response);
            this.ticket.setUser(response);
            this.formRegistro.reset();
            this.router.navigate(['/painel-de-carros'])
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
      senha:              new FormControl({value: this.user.senha,            disabled: false},         Validators.compose([Validators.required, Validators.minLength(4)])),
      dataNascimento:     new FormControl({value: this.user.dataNascimento,   disabled: false},         this.user ? null : Validators.required),
      ativo:              new FormControl({value: this.user.ativo,            disabled: false}),
      isAdmin:            new FormControl({value: this.user.isAdmin,          disabled: false}),
      dataCadastro:       new FormControl({value: this.user.dataCadastro,     disabled: false}),
     })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnDestroy {
  private destroy$: Subject<void> = new Subject();

  public formRegistro: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
    ) {

    this.formRegistro = this.builderForm();
   }

  public registrar(): void {
    if (this.formRegistro.value && this.formRegistro.valid) {
      this.userService.signUpUser(this.formRegistro.value)
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

  private builderForm(): FormGroup {
    return this.fb.group({
      login:  new FormControl({value: '',   disabled: false},         Validators.required),
      nome: new FormControl({value: '',   disabled: false},         Validators.required),
      senha: new FormControl({value: '',   disabled: false},         Validators.required),
      confirmarSenha:
                      new FormControl({value: '',   disabled: false},         Validators.required),
      dataDeNascimento: new FormControl({value: '',   disabled: false},         Validators.required),
      ativo: new FormControl({value: true, disabled: false}),
      isAdmin: new FormControl({value: false, disabled: false}),
      dataDeCadastro: new FormControl({value: new Date,   disabled: false},        Validators.required),

     })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent {

  public formRecuperarSenha: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { 
    this.formRecuperarSenha = this.builderForm();
  }

  public recuperar(): void {
    this.userService.recuperarSenha(this.formRecuperarSenha.value);
  }

  private builderForm(): FormGroup {
    return this.fb.group({
      login: new FormControl({value: '', disabled: false}, Validators.required)
    });
  }
}

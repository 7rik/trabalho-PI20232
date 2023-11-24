import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  public formRegistro: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder) {

    this.formRegistro = this.builderForm();
   }

  public registrar() {
    if (this.formRegistro.value["senhaDoUsuario"] ===   this.formRegistro.value["confirmarSenhaDoUsuario"]) {
      localStorage.setItem("nomeDoUsuario",             this.formRegistro.value["nomeDoUsuario"]);
      localStorage.setItem("emailDoUsuario",            this.formRegistro.value["emailDoUsuario"]);
      localStorage.setItem("senhaDoUsuario",            this.formRegistro.value["senhaDoUsuario"]);
      localStorage.setItem("confirmarSenhaDoUsuario",   this.formRegistro.value["confirmarSenhaDoUsuario"]);
      console.log(this.formRegistro.value);
      this.router.navigate(['/painel-de-carros']);
    } else {
      alert("As senhas não conferem!");
    }
  }

  private builderForm(): FormGroup {
    return this.fb.group({
      nomeDoUsuario:  new FormControl({value: '',   disabled: false},         Validators.required),
      emailDoUsuario: new FormControl({value: '',   disabled: false},         Validators.required),
      senhaDoUsuario: new FormControl({value: '',   disabled: false},         Validators.required),
      confirmarSenhaDoUsuario:
                      new FormControl({value: '',   disabled: false},         Validators.required),
     })
  }
}

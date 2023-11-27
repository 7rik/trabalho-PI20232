import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full', title: 'Login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro', component: RegistroComponent, title: 'Registro'
  },
  {
    path: 'recuperar-senha', component: RecuperarSenhaComponent, title: 'Recuperar Senha' 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

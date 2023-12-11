import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { ListarInteressesComponent } from '../admin/view/components/listar-interesses/listar-interesses.component';

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
    path: 'alterar-meu-usuario',
    component: RegistroComponent,
    title: 'Alterar Meu Usuário'
  },
  {
    path: 'recuperar-senha', component: RecuperarSenhaComponent, title: 'Recuperar Senha'
  },
  {
    path: 'meus-interesses',
    component: ListarInteressesComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

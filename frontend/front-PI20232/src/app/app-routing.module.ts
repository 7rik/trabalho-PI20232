import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas-publicas/login/login.component';
import { RegistroComponent } from './paginas-publicas/registro/registro.component';
import { PainelDeCarrosComponent } from './paginas-publicas/painel-de-carros/painel-de-carros.component';

const routes: Routes = [
  {
    path: '', component: PainelDeCarrosComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registro', component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

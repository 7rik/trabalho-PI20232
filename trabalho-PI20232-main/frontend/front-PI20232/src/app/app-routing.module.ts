import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/paginas-publicas/login/login.component';
import { RegistroComponent } from './pages/paginas-publicas/registro/registro.component';
import { PainelDeCarrosComponent } from './pages/paginas-publicas/painel-de-carros/painel-de-carros.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'painel-de-carros', pathMatch: 'full', title: 'Painel de Carros'
  },
  {
    path: 'painel-de-carros', component: PainelDeCarrosComponent, title: 'Painel de Carros'
  },
  {
    path: 'login', component: LoginComponent, title: 'Login'
  },
  {
    path: 'registro', component: RegistroComponent, title: 'Registro'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCarrosComponent } from './components/listar-carros/listar-carros.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  {
    path: 'carros',
    component: ListarCarrosComponent,
  },
  {
    path: 'usuarios',
    component: ListarUsuariosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalViewRoutingModule { }

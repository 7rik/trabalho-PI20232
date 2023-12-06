import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelDeCarrosComponent } from './pages/painel-de-carros/painel-de-carros.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'painel-de-carros', pathMatch: 'full', title: 'Painel de Carros'
  },
  {
    path: 'painel-de-carros', component: PainelDeCarrosComponent, title: 'Painel de Carros'
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

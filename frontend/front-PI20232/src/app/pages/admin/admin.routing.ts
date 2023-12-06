import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalAdmComponent } from './principal-adm/principal-adm.component';

const routes: Routes = [
  {
    path: '', component: PrincipalAdmComponent, 
    loadChildren: () => import('./view/principal-view.module').then(m => m.PrincipalViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin.routing';
import { PrincipalAdmComponent } from './principal-adm/principal-adm.component';
import { PrincipalViewModule } from './view/principal-view.module';


@NgModule({
  declarations: [
    PrincipalAdmComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PrincipalViewModule,
  ]
})
export class AdminModule { }

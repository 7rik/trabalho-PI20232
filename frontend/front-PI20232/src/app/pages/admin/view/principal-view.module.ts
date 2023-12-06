import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarCarrosComponent } from './components/listar-carros/listar-carros.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { PrincipalViewRoutingModule } from './principal-view.routing';
import { InfoUsuarioComponent } from './components/listar-usuarios/info-usuario/info-usuario.component';
import { EditUsuarioComponent } from './components/listar-usuarios/edit-usuario/edit-usuario.component';


@NgModule({
  declarations: [
    ListarCarrosComponent,
    ListarUsuariosComponent,
    InfoUsuarioComponent,
    EditUsuarioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    PrincipalViewRoutingModule,
    FormsModule
  ]
})
export class PrincipalViewModule { }

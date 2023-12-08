import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarCarrosComponent } from './components/listar-carros/listar-carros.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { PrincipalViewRoutingModule } from './principal-view.routing';
import { InfoUsuarioComponent } from './components/listar-usuarios/info-usuario/info-usuario.component';
import { EditUsuarioComponent } from './components/listar-usuarios/edit-usuario/edit-usuario.component';
import { EditCarrosComponent } from './components/listar-carros/edit-carros/edit-carros.component';
import { InfoCarrosComponent } from './components/listar-carros/info-carros/info-carros.component';
import { EditInteressesComponent } from './components/listar-interesses/edit-interesses/edit-interesses.component';
import { ListarInteressesComponent } from './components/listar-interesses/listar-interesses.component';
import { InfoInteressesComponent } from './components/listar-interesses/info-interesses/info-interesses.component';

@NgModule({
  declarations: [
    ListarCarrosComponent,
    ListarUsuariosComponent,
    ListarInteressesComponent,
    EditUsuarioComponent,
    EditCarrosComponent,
    EditInteressesComponent,
    InfoCarrosComponent,
    InfoUsuarioComponent,
    InfoInteressesComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    PrincipalViewRoutingModule,
    FormsModule,
  ],
  providers: []
})
export class PrincipalViewModule { }

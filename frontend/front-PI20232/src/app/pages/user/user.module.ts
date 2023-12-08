import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user.routing';
import { CarService } from 'src/app/services/car/car.service';
import { UserService } from 'src/app/services/user/user.service';
import { UserModel } from 'src/app/models/classes/user/user.model';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    RecuperarSenhaComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: []
})
export class UserModule { }

import {  Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserModel } from 'src/app/models/classes/user/user.model';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html'
})
export class InfoUsuarioComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserModel,
  ) {}

 }

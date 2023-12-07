import {  Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserModel } from 'src/app/models/classes/user/user.model';
import { UserService } from 'src/app/services/user/user.service';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html'
})
export class ListarUsuariosComponent {
  displayedColumns: string[] = ['status', 'nome', 'login', 'admin', 'actions'];
  dataSource = [];

  constructor(
    private user: UserService,
    private dialog: MatDialog
  ) {

    this.getUsers();
  }

  public openInfo(user: UserModel) {
    const dialogRef = this.dialog.open(InfoUsuarioComponent, {
      data: user,
      minWidth: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getUsers();
      }
    });
  }

  public newUser() {
    const dialogRef = this.dialog.open(EditUsuarioComponent, {
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getUsers();
      }
    });
  }

  public openEdit(user: UserModel) {
    const dialogRef = this.dialog.open(EditUsuarioComponent, {
      data: user,
      minWidth: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getUsers();
      }
    });
  }

  private getUsers() {
    this.user.getAllUsers().subscribe({
      next: (response: any) => {
        this.dataSource = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  public deleteUser(id: number) {
    this.user.deleteUser(id).subscribe({
      next: (response: any) => {
        this.getUsers();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
 }

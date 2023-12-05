import { Injectable } from "@angular/core";
import { UserModel } from "src/app/models/classes/user/user.model";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
  ) { }

  public getUser(): UserModel {
    const item = localStorage.getItem('pi.user');
    return item ? JSON.parse(item) : null;
  }

  public setUser(user: UserModel): void {
    localStorage.setItem('pi.user', JSON.stringify(user));
  }

  public isLogged(): boolean {
    return this.getUser() ? true : false;
  }

  public onLogout(): void {
    localStorage.removeItem('pi.user');
  }
}

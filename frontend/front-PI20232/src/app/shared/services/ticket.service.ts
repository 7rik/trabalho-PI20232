import { Injectable } from "@angular/core";
import { UserModel } from "src/app/models/interfaces/user/user.model";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
  ) { }

  public getUser(): UserModel {
    return JSON.parse(localStorage.getItem('pi.user') || '');
  }

  public setUser(user: UserModel): void {
    localStorage.setItem('pi.user', JSON.stringify(user));
  }
}

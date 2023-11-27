import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { UserModel } from 'src/app/models/interfaces/user/user.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  public signUpUser(requestDatas: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>
    (`${this.API_URL}/users`, requestDatas);
  }

  public authUser(requestDatas: AuthRequest): Observable<UserModel> {
    return this.http.get<UserModel>
    (`${this.API_URL}/users?login=${requestDatas.login}`);
  }

  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.API_URL}/users`);
  }

  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from 'src/app/models/classes/user/auth/AuthRequest';
import { UserModel } from 'src/app/models/classes/user/user.model';
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

  // public authUser(requestDatas: AuthRequest): Observable<UserModel> {
  //   return this.http.get<UserModel>
  //   (`${this.API_URL}users/validate-login=${requestDatas.login}`);
  // }

  public authUser(requestDatas: AuthRequest): Observable<any> {
    const body: any = {
      username: requestDatas.login,
      password: requestDatas.senha
    };
    return this.http.post<any>
    (`${this.API_URL}/users/validate-login`, body);
  }

  public getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>
    (`${this.API_URL}/users`);
  }

  public createUser(requestDatas: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>
    (`${this.API_URL}/users`, requestDatas);
  }

  public updateUser(requestDatas: UserModel): Observable<any> {
    return this.http.put<any>
    (`${this.API_URL}/users/${requestDatas.id}`, requestDatas);
  }

  public deleteUser(id: number): Observable<UserModel> {
    return this.http.delete<UserModel>
    (`${this.API_URL}/users/${id}`);
  }
}

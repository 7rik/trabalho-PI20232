import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { UserModel } from 'src/app/models/interfaces/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_MOCK_URL = 'https://651b1e44194f77f2a5ae3fd8.mockapi.io/api/v1/next/user'

  constructor(
    private http: HttpClient
  ) { }

  public signUpUser(requestDatas: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>
    (`${this.API_MOCK_URL}`, requestDatas);
  }

  public authUser(requestDatas: AuthRequest): Observable<UserModel> {
    return this.http.get<UserModel>
    (`${this.API_MOCK_URL}?username=${requestDatas.username}`);
  }
}

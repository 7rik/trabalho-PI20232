import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/classes/user/user.model';
import { environment } from 'src/environments/environments';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
  ) {
  }

  public getAllCars(): any {
    return this.http.get<any>
    (`${this.API_URL}/cars`);
  }

  public getAllPublicCars(): any {
    return this.http.get<any>
    (`${this.API_URL}/public/cars`);
  }

  public getAllInterestedCars() {
    return this.http.get<any>
    (`${this.API_URL}/cars/interesse`);
  }

  public getCarById(id: number): any {
    return this.http.get<any>
    (`${this.API_URL}/cars/${id}`);
  }

  public createCar(requestDatas: any): any {
    return this.http.post<any>
    (`${this.API_URL}/cars`, requestDatas);
  }

  public updateCar(requestDatas: any): any {
    return this.http.put<any>
    (`${this.API_URL}/cars/${requestDatas.id}`, requestDatas);
  }

  public interesseCar(carId: any, userId: any): any {
    return this.http.put<any>
    (`${this.API_URL}/cars/${carId}/interesse/${userId}`, {});
  }

  public deleteCar(id: any): any {
    return this.http.delete<any>
    (`${this.API_URL}/cars/${id}`);
  }

  public removerInteresse(carId: any, userId: any): any {
    return this.http.put<any>
    (`${this.API_URL}/cars/${carId}/interesse/${userId}`, {});
  }
}

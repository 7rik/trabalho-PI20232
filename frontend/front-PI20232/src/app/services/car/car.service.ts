import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  public getAllCars(): any {
    return this.http.get<any>
    (`${this.API_URL}/cars`);
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

  public deleteInteresse(carId: any, userId: any): any {
    const url = `${this.API_URL}/cars/${carId}/interesse/${userId}`;
    console.log('URL da requisição DELETE:', url);
    return this.http.delete<any>(url);
  }

}

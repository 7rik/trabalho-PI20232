import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {


  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
   }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl : any = 'https://localhost:7200/api/';
  constructor(private http: HttpClient) {

   }
   login(model : any){
    return this.http.post(this.baseUrl + 'Account/Login',model);
   }
}

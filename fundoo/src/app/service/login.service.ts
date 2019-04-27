import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { HttpClient } from '@angular/common/http';
import { ServiceUrlService } from '../serviceUrl/service-url.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private serviceurl:ServiceUrlService) {}

  login:Login
  //debugger
  createlogin(Login)
  {
    let createlogin = new FormData();
    createlogin.append("email", Login.email);
    createlogin.append("password", Login.password);
    return this.http.post(this.serviceurl.host + this.serviceurl.register, createlogin);
  }
}


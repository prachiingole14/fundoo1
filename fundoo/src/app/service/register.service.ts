import { Injectable } from '@angular/core';
import { Register } from '../model/register';
import { ServiceUrlService } from '../serviceUrl/service-url.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private http:HttpClient,private serviceurl:ServiceUrlService) { }

  register:Register
  createuser(register){
    let createuser = new FormData();
    //debugger
    createuser.append("firstName", register.firstName);
    createuser.append("lastName", register.lastName);
    createuser.append("Emailid", register.Emailid);
    createuser.append("password", register.password);
    return this.http.post(this.serviceurl.host + this.serviceurl.register, createuser);
  }
 
}

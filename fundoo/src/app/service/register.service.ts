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

  createuser(register)
  {
    
    let createuser = new FormData();
    //debugger
    createuser.append("firstName", register.firstName);
    createuser.append("address",register.address);
    createuser.append("contact", register.contact);
    createuser.append("email", register.email);
    createuser.append("password", register.password);
    createuser.append("confirm_password", register.confirm_password);
    return this.http.post(this.serviceurl.host + this.serviceurl.register, createuser);
  }
 
}

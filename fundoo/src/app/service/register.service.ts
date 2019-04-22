import { Injectable } from '@angular/core';
import { Register } from '../model/register';
import { ServiceUrlService } from '../serviceUrl/service-url.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  // http: any;application/service/UserDataController.php
  // serviceurl: any;

  //constructor(){}
  constructor(private http:HttpClient,private serviceurl:ServiceUrlService) { }

  register:Register
  
  // user_registration()
  // {
  //   let user_registration = new registerApi();
  //   user_registration.append("firstName", this.register.firstname);
  //   user_registration.append("address", this.register.address);
  //   user_registration.append("contact",this.register.contact);
  //   user_registration.append("email", this.register.email);
  //   user_registration.append("username",this.register.username);
  //   user_registration.append("password",this.register.password);
  //   user_registration.append("confirmpassword", this.register.confirmpassword);
  //   return this.http.post(this.serviceurl.host + this.serviceurl.register, user_registration);
  //   //return   user_registration
  // }
}

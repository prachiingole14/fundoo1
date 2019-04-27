import { Injectable } from '@angular/core';
import { Reset } from '../model/reset';
import { HttpClient } from '@angular/common/http';
import { ServiceUrlService } from '../serviceUrl/service-url.service';

@Injectable({
  providedIn: 'root'
})

export class ResetPasswordService 
{

  constructor(private http:HttpClient,private serviceurl:ServiceUrlService) { }
  reset : Reset ;

  ResetPassword(Reset)
  {
    let ResetPassword = new FormData();
    ResetPassword.append("email",Reset.email);
    ResetPassword.append("password",Reset.password);
    ResetPassword.append("newpassword",Reset.newpassword);
    return this.http.post(this.serviceurl.host + this.serviceurl.register, ResetPassword);
  }
}

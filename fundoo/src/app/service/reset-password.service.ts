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

  isreset(Reset)
  {
    let isreset = new FormData();
    isreset.append("email",Reset.email);
    isreset.append("password",Reset.password);
    isreset.append("newpassword",Reset.newpassword);
    return this.http.post(this.serviceurl.host + this.serviceurl.register, isreset);
  }
}

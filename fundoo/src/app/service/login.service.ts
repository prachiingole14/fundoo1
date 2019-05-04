import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { HttpClient } from '@angular/common/http';
import { ServiceUrlService } from '../serviceUrl/service-url.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService 
{
  route: any;
  constructor(private http:HttpClient,private serviceurl:ServiceUrlService) {}
  login:Login
 
  createlogin(login: Login) 
  {
    let userLogin = new FormData();
    userLogin.append("email", login.email);
    userLogin.append("password", login.password);
    return this.http.post(this.serviceurl.host + this.serviceurl.login, this.createlogin);
  }

  getEmail() 
  {
    
    let urlTocken = new FormData();
    urlTocken.append("token", this.route.snapshot.queryParamMap.get("token"));
    return this.http.post(this.serviceurl.host + this.serviceurl.getEmail, urlTocken);
  }
}


import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ServiceUrlService {

  constructor() {}
 
    public host = environment.baseUrl;
    public register = "register";
    public login = "login";
    public reset = "ResetPassword";
  
}

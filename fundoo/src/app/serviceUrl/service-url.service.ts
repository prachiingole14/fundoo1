import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ServiceUrlService {
  editlables: string;

  constructor() {}
 
    public host = environment.baseUrl;
    public register = "register";
    public login = "login";
    public reset = "ResetPassword";
    public getEmail = "getEmailId";
    public notes = "notes";
    public changeColor = "col";
    public addNotes = "takeNotes";
    public Editlables = "editlables"
}

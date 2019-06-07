import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ServiceUrlService 
{
  showlabel: string;
  constructor() {}
    public host = environment.baseUrl;

    public register = "register";
    public login = "login";
    public reset = "ResetPassword";
    public getEmail = "getEmailId";

    public notes = "notes";
    public changeColor = "col";
    public takeNotes = "addNotes";
    public displaycontents = "displayNotes";

    public label = "addLabel";
    public navbar = "displayNotes";
    public getLabel="displaylabeles"
}

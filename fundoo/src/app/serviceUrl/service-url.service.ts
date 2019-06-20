import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ServiceUrlService 
{
  showlabel: string;
  addLabel: string;
  constructor() {}
    public host = environment.baseUrl;

    public register = "register";
    public login = "login";
    public reset = "ResetPassword";
    public getEmail = "getEmailId";

    public takeNotes = "addnote";
    public changeColor = "col";
    public displaycontents = "displayNotes";

    public label = "addLabel";
    public navbar = "displayNotes";
    public getLabel="displaylabeles";

    public todayremind="reminders";
}

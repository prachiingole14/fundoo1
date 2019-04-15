import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Login } from 'src/app/service/login/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  constructor() { }

  //emailFormControl = new FormControl('', [
  //  Validators.required,
  //  Validators.email,
  //]);
  ngOnInit() {
  }
login()
{
  console.log('its running'); 
}
}

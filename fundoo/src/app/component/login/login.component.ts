import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { isFunction } from 'util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent implements OnInit {
  message: any;
  LoginService: any;
  router: any;
  hide = true;
  constructor(private s_login:LoginService) { }

  ngOnInit() { }
  model: any = {};

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]);

  onSubmit() 
  {

    this.model = {
      "email": this.email.value,
      "password": this.password.value
    }

    let status = this.s_login.createlogin(this.model);
    status.subscribe(res => {
      console.log(res)
    });

    if (this.email.value == ' ' || this.password.value == ' ')
    {
      alert('all fields are required')
      console.log('error')
     
    }
    else  
    {
      alert('Suceessfully login')
        console.log(this.model);

        let obj = this.LoginService.createlogin(this.model);
        obj.subscribe((res: any) => 
        { },);
    
    }
  }

  emailError() 
  {
    return this.email.hasError('required') ?'':'Invalid email id it should like this Ex. aca4@gmail.com'  
  }

  passwordError()
  {
    return this.password.hasError('required') ? 'Ex. AbcG245@' : 'It must be alphanumric and atleast 5 characters'
  }

}

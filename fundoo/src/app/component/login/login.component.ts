import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { isFunction } from 'util';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit 
{
  message: any;
  constructor(){}

  ngOnInit(){}
  model: any = {};

  username= new FormControl('',[Validators.required,Validators.maxLength(10)]);
  password=new FormControl('',[Validators.required,Validators.minLength(6), Validators.maxLength(15)]); 

  onSubmit()
  {
    this.model={   "username":this.username.value,
                    "password":this.password.value
                }

                console.log('success')

                if((this.username.value || this.password.value)==null)
                {
                  alert('all fields are required')
                  console.log('error')
                }
                else{
                  alert('Suceessfully login')
                }
                
               
  }
    usernameError()
    {
      return this.username.hasError('required')?'Enter proper user name':'Invalid username id'
    }
            
    passwordError()
    {
      return this.password.hasError('required')?'Ex. AbcG245@':'it must be alphanumric'
    }
}

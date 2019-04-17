import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  // loginForm=FormGroup;
  // hide=true;
  // model:any;
  // response:any;
  // message='';

  // firstName='';
  // service: any;
    constructor() { }

  //emailFormControl = new FormControl('', [
  //  Validators.required,
  //  Validators.email,
  //]);
  ngOnInit()
  {
  //   this.getUserService()
  //   this.service= localStorage.getItem('service')
  //   console.log(this.formBuilder.group({
  //     username:['',[Validators.required, Validators.email]],
  //     password:['',[Validators.required]]
  //   }));
  // }

  // get f()
  // {
  //   return this.loginForm.controls;
  // }
  // getUserService() {
  //   throw new Error("Method not implemented.");

  }
  
// login()
// {
//   console.log('its running'); 
//   this.model={
//     "username":this.loginForm.get('username').value,
//     "password":this.loginForm.get('password').value,
//   }
// }


signin()
{
  //console.log("its running");
  //if(this.login()!=null)
  alert("Your responce has been submitted");
}
  

}

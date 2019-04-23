import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MIN_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { RegisterService } from 'src/app/service/register.service';
import { stat } from 'fs';

const newLocal = 'This field is empty';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit 
{
  message: any;
  submit: void;

  constructor(private s_register:RegisterService){}

  ngOnInit() {}

  model: any = {};
  
  firstName=new FormControl(' ',[Validators.required,Validators.minLength(4), Validators.maxLength(30)]);
  address=new FormControl('',[Validators.required, Validators.maxLength(50)]);
  contact=new FormControl('',[Validators.required, Validators.maxLength(10)]);
  email= new FormControl('',[Validators.required, Validators.email]);
  password=new FormControl('',[Validators.required,Validators.minLength(6), Validators.maxLength(15)]);
  confirmpassword=new FormControl('',[ Validators.required, Validators.minLength(6), Validators.maxLength(15)]);

  onSubmit() 
  {  
    debugger;  

    this.model={
      "firstName":this.firstName.value,
      "address":this.address.value,
      "contact":this.contact.value,
      "email":this.email.value,
      "password" : this.password.value,
      "confirmpassword" : this.confirmpassword.value
    } 
    let status = this.s_register.createuser(this.model);
    status.subscribe(res=>{

    console.log(res);


    });

    this.submit=console.log(this.firstName.value,
      this.address.value,
      this.contact.value,
      this.email.value,
      this.password.value,
      this.confirmpassword.value)

      if(this.submit!=null)
      {
        alert("Your form is Submited")
      }
      else{
        alert("some fields are missing")
      }
     
  }

  firstNameError()
  {
    return this.firstName.hasError('required')?'must be in char format':''
  }

// patternError(){
//     return this.firstName.hasError('')?'FirstName Required':'pattern should not match'
 
//    }

  firstAddressError()
    {
      return this.address.hasError('required')?'Address must be required in character format ':'This field is empty'
    }

  contactError()
    {
      return this.contact.hasError('required')?'Contact must be required in numric format ':'This field is empty'
    }

  emailError()
    {
      return this.email.hasError('required')?'Ex. aca4@gmail.com':'Invalid email id'
    }

  passwordError()
    {
      return this.password.hasError('required')?'Ex. AbcG245@':'it must be alphanumric'
    }

  checkConfirmPassword()
    {
      
      if (this.password.value==this.confirmpassword.value|| this.password.value==null)
        {
          console.log("valid password")
         //return "success"
         return this.confirmpassword.hasError('required')?'Invalid password':'Invalid password'
        }
        else
        {
          this.message="invalid password";
          //console.log("invalid password")
          return this.password.hasError('required')?'':'its must match with your password'
        }
    }

  
  }


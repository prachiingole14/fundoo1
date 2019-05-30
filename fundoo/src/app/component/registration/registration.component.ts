import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { RegisterService } from 'src/app/service/register.service';
//import { stat } from 'fs';

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
  
  firstName=new FormControl(' ',[Validators.required,Validators.minLength(2), Validators.maxLength(30)]);
  address=new FormControl('',[Validators.required, Validators.maxLength(50)]);
  contact=new FormControl('',[Validators.required, Validators.maxLength(10)]);
  email= new FormControl('',[Validators.required, Validators.email]);
  password=new FormControl('',[Validators.required,Validators.minLength(5), Validators.maxLength(15)]);
  confirm_password=new FormControl('',[ Validators.required, Validators.minLength(5), Validators.maxLength(15)]);

  onSubmit() 
  {  
    //debugger;  

     
     if (this.firstName.value == ' '|| this.address.value == ' ' || this.contact.value == ' ' ||this.email.value ==' ' || this.password.value == ' ' || this.confirm_password.value == ' ') 
      {
        alert("some fields are missing")
        //alert("Your form is Submited")
      }
      else if (this.password.value != this.confirm_password.value) 
      {
        alert( "Password doesnot match");
        return;
      }
        else
        {
          //alert("some fields are missing")
          alert("Your form is Submited")
        }

      this.model={"firstName":this.firstName.value,
                "address":this.address.value,
                "contact":this.contact.value,
                "email":this.email.value,
                "password" : this.password.value,
                "confirmpassword" : this.confirm_password.value} 
   
      let status = this.s_register.createuser(this.model)
      status.subscribe(res=>{
      console.log(res);
      });

      this.submit=console.log(this.firstName.value,
                            this.address.value,
                            this.contact.value,
                            this.email.value,
                            this.password.value,
                            this.confirm_password.value)
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
      
      if (this.password.value==this.confirm_password.value || this.password.value==null)
        {
          console.log("valid password")
         //return "success"
         return this.confirm_password.hasError('required')?'Invalid password':'Invalid password'
        }
        else
        {
          this.message="invalid password";
          //console.log("invalid password")
          return this.password.hasError('required')?'':'its must match with your password'
        }
    }

  
  }


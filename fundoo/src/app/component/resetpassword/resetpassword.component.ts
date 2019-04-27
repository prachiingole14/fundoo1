import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})

export class ResetpasswordComponent implements OnInit {
  message: any;
  constructor() { }
  
  ngOnInit() {}

  model: any = {};
  email= new FormControl('',[Validators.required, Validators.email]);
  password=new FormControl('',[Validators.required,Validators.minLength(6), Validators.maxLength(15)]); 
  newpassword=new FormControl('',[Validators.required,Validators.minLength(6), Validators.maxLength(15)]);

  onReset()
  {
    this.model={   
                    "email":this.email.value,
                    "password":this.password.value,
                    "newpassword":this.newpassword.value
                }
                console.log('success')
                
                if(this.email.value == ' ' || this.password.value == ' ' || this.newpassword.value == ' ')
                {
                  alert('Your password not is updated')
                  console.log(this.password.value)
                }
                else{
                  alert('Your password is updated')
              
                }
                //return alert(this.model.hasError('required')?'sads':'done')
               
  }

    emailError()
    {
      return this.email.hasError('required')?'Ex. aca4@gmail.com':'Invalid email id'
    }
            
    passwordError()
    {
      return this.password.hasError('required')?'Ex. AbcG245@':'it must be alphanumric'
    }

    resetpasswordError()
    {
      return this.password.hasError('required')?'Ex. AbcG245@':'it must be alphanumric'
    }
  

}

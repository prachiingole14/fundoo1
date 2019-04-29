import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, RequiredValidator } from '@angular/forms';
import { ResetPasswordService } from 'src/app/service/reset-password.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})

export class ResetpasswordComponent implements OnInit {
  message: any;

  constructor(private s_reset:ResetPasswordService) { }
  
  ngOnInit() {}

  model: any = {};
  email= new FormControl('',[Validators.required, Validators.email]);
  password=new FormControl('',[Validators.required,Validators.minLength(6), Validators.maxLength(15)]); 
  newpassword=new FormControl('',[Validators.required,Validators.minLength(6), Validators.maxLength(15)]);

  onReset()
  {
    if(this.email.value == '' || this.password.value == '' || this.newpassword.value == '')
    {
      alert('All fields are required')
      console.log(this.password.value)
    }
    else
    {
      alert("Your password is updated")
    }

    this.model={   
                  "email":this.email.value,
                  "password":this.password.value,
                  "newpassword":this.newpassword.value
                }

    console.log('success')
   
    let status = this.s_reset.isreset(this.model);
    status.subscribe(res => {
      console.log(res)
    });

   
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

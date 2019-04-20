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

  username= new FormControl('',[Validators.required,Validators.maxLength(10)]);
  password=new FormControl('',[Validators.required,Validators.minLength(6), Validators.maxLength(15)]); 
  newpassword=new FormControl('',[Validators.required,Validators.minLength(6), Validators.maxLength(15)]);

  onReset()
  {
    this.model={   "username":this.username.value,
                    "password":this.password.value,
                    "newpassword":this.newpassword.value
                }
                console.log('success')

                if(this.username==null && this.password==null && this.newpassword==null)
                {
                  alert('Your password not is updated')
                  console.log(this.password.value)
                }
                else{
                  alert('Your password is updated')
              
                }
                
                //return alert(this.model.hasError('required')?'sads':'done')
               
  }
    usernameError()
    {
      return this.username.hasError('required')?'Enter proper user name':'Invalid username id'
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

import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { RegisterService } from 'src/app/service/register.service';
import {lableService } from 'src/app/service/lable.service';
import { MatSnackBar } from '@angular/material';

const newLocal = 'This field is empty';

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit 
{
  submit: void;
  constructor(private s_label:lableService, private snack : MatSnackBar) { }

  flag = true;
  ngOnInit() 
  {}

  model: any = {};

  lable_name = new FormControl(' ',[Validators.required]);
  
  lableError()
  {
    return this.lable_name.hasError('required')?'Invalid label....!':''
  }

  addLabel()
  {
    this.model={  "lable_name":this.lable_name.value }

    if(this.lable_name.value == ' ')
    {
      console.log("empty label")
    }
    else
    {
      this.model={"lable_name":this.lable_name.value}

      let status = this.s_label.addLables(this.model)
      status.subscribe(res=>{
      console.log(res);
      });
   
      this.submit=console.log(this.lable_name.value)
      let snackBarRef = this.snack.open('Label added successfully.....!', 'Undo');
    }
    
   
  }
}

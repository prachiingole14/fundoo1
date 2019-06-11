import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { lableService } from 'src/app/service/lable.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit 
{
  submit: void;
  label: any;
 
  constructor(private s_label:lableService , private snack : MatSnackBar) { }

  flag = true;

  ngOnInit() 
  {
   
  }

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
      let snackBarRef = this.snack.open('Label empty....!', 'Undo');
    }
    else
    {
      this.model={"lable_name":this.lable_name.value}

      let status = this.s_label.addLables(this.model)
      status.subscribe(res=>{
      console.log(res);

      let snackBarRef = this.snack.open('Label added successfully.....!', 'Undo');
      });
  
      this.submit=console.log(this.lable_name.value)
     console.log("label not added")
    }
  }

  reverse()
  {
    this.flag = !this.flag;
  }

  

 
}

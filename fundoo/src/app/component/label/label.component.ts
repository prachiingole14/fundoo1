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
    this.getAllLabels()
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
      console.log("empty label")
      let snackBarRef = this.snack.open('Label empty....!', 'Undo');
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

  getAllLabels()
  {
    this.s_label.getlabels().subscribe(data=>{
      console.log('all labels is in',data);
        this.label=data;
      
    },err=>{
      console.log('error in get note',err);
      
    })
  }
}

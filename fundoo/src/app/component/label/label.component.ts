import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { lableService } from 'src/app/service/lable.service';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit 
{
  submit: void;
  label: any;
  headers: any;

  constructor(private s_label:lableService , private snack : MatSnackBar) 
  {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Authorization');
   }

  @Input() alllabel;
  flag = true;
  ngOnInit() 
  {
    this.getAllLabels()
  }

  model: any = {};

  label_name = new FormControl(' ',[Validators.required]);
  
  lableError()
  {
    return this.label_name.hasError('required')?'Invalid label....!':''
  }

  addLabel()
  {
    this.model={  "label_name":this.label_name.value }
    if(this.label_name.value == '')
    {
      let snackBarRef = this.snack.open('Label empty....!');
      console.log("label not added")
    }
    else
    {
      this.model={"lable_name":this.label_name.value}
      let status = this.s_label.addLables(this.model)
      status.subscribe(res=>{
      console.log(res);

      let snackBarRef = this.snack.open('Label added successfully.....!');
      });
  
      this.submit=console.log(this.label_name.value)
    }
  }

  reverse()
  {
    this.flag = !this.flag;
  }
  
  getAllLabels()
  {
    this.s_label.getlabels().subscribe(data=>{
      console.log('all labels is in',data);
        this.label=data;
    },
    err=>{
            console.log('error in get label',err);
          })
  }
}

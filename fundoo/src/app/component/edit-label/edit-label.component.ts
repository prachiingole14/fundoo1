import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { RegisterService } from 'src/app/service/register.service';
import { EditlableService } from 'src/app/service/editlable.service';

const newLocal = 'This field is empty';

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit 
{
  submit: void;
  constructor(private s_editlabel:EditlableService) { }

  flag = true;
  ngOnInit() 
  {}

  model: any = {};

  lable_name = new FormControl(' ',[Validators.required]);
  
  lableError()
  {
    return this.lable_name.hasError('required')?'Invalid label....!':''
  }

  addLebale()
  {
    if(this.lable_name.value == ' ')
    {
      console.log("empty label")
    }
    else
    {
      this.model={"lable_name":this.lable_name.value}

      let status = this.s_editlabel.addLables(this.model)
      status.subscribe(res=>{
      console.log(res);
      });
  
      this.submit=console.log(this.lable_name.value)
    }
    
   
  }
}

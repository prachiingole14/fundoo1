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
  constructor(private s_editlabel:EditlableService) { }

  flag="true";
  ngOnInit() 
  {}

  model: any = {};

  lable_name = new FormControl(' ',[Validators.required]);
  
  lableError()
  {
    return this.lable_name.hasError('required')?'':'It must be required in character format and size should be greater than 10 and less than 50  '
  }

}

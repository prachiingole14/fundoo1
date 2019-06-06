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
  constructor( private snack : MatSnackBar) { }

  flag = true;
  ngOnInit() 
  {}

  model: any = {};

  lable_name = new FormControl(' ',[Validators.required]);
  
  lableError()
  {
    return this.lable_name.hasError('required')?'Invalid label....!':''
  }

  
    
   
  }


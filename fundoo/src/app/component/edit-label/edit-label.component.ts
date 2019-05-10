import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { RegisterService } from 'src/app/service/register.service';


const newLocal = 'This field is empty';


@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {

  constructor(private s_register:RegisterService) { }

  flag="true";
  ngOnInit() 
  {}


  lable_name=new FormControl(' ',[Validators.required,Validators.minLength(5), Validators.maxLength(30)]);

  lableError()
  {
    return this.lable_name.hasError('required')?'':'It must be required in character format and size should be greater than 10 and less than 50  '
  }

}

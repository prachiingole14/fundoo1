import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// import {Inject} from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit 
{
  color:any;
  image: any;
  
  flag=true;

  constructor() {}

  ngOnInit() {}
  model: any = {};

  title=new FormControl(' ',[Validators.required]);
  description=new FormControl(' ',[Validators.required]);

  titleError()
  {
    return this.title.hasError('required')?'':''
  }

  descriptionError()
  {
    return this.description.hasError('required')?'':''
  }

  ChangeColor(color)
  {
    this.color=color;
    console.log(this.color,"change color");
  }

  reverse()
  {
    this.flag = !this.flag
  }

}


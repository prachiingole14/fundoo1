import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit 
{
  color:any;
  image: any;
  
  constructor() { }
  flag=true;
 
  
  ngOnInit() {}
  model: any = {};

  title=new FormControl(' ',[Validators.required,Validators.minLength(5), Validators.maxLength(30)]);
  description=new FormControl(' ',[Validators.required, Validators.minLength(10), Validators.maxLength(50)]);


  titleError()
  {
    return this.title.hasError('required')?'':'It must be required in character format and size should be greater than 5 and less than 30 '
  }

  descriptionError()
  {
    return this.description.hasError('required')?'':'It must be required in character format and size should be greater than 10 and less than 50  '
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
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ReminderService } from 'src/app/service/reminder.service';
// import {Inject} from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})

export class ReminderComponent implements OnInit 
{
  flag=true;
  model: {};
  time_date: any;
  constructor(private reminder:ReminderService) {}
  ngOnInit() {}

  setreminder()
  {
    this.model={  "date_time" : this.time_date.value  };
    let status = this.reminder.todayremind(this.model)
    status.subscribe(res => {console.log("todays reminder : ",res)}
    err=>console.log("error in reminder")
    )
  }

}


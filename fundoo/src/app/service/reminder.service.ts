import { Injectable } from '@angular/core';
import { Reminder } from '../model/reminder';
import { HttpClient } from '@angular/common/http';
import { ServiceUrlService } from '../serviceUrl/service-url.service';
import { IconComponent } from '../component/icon/icon.component' ;
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReminderService 
{
  
  constructor( private http:HttpClient, serviceUrl:ServiceUrlService) { }

  reminder=Reminder;

  todayremind(reminder)
  {
    let reminders = new FormData();
    reminders.append("reminder", reminder.date_time);
    return this.http.get('http://localhost/fundoo1/index.php/todayreminder',{});
  }
}

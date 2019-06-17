import { Injectable } from '@angular/core';
import { Reminder } from '../model/reminder';
import { HttpClient } from '@angular/common/http';
import { ServiceUrlService } from '../serviceUrl/service-url.service';

@Injectable({
  providedIn: 'root'
})
export class ReminderService 
{
  constructor( private http:HttpClient, serviceUrl:ServiceUrlService) { }
  reminder=Reminder;

  todayRemind(reminder)
  {
    let todayremind = new FormData();
    todayremind.append("reminder", reminder.date_and_time);
   // return this.http.get('', todayremind);
  }
}

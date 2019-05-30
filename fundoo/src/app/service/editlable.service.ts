import { Injectable } from '@angular/core';
import { ServiceUrlService } from '../serviceUrl/service-url.service';
import { HttpClient } from '@angular/common/http';
import { Editlable } from '../model/editlable';

@Injectable({
  providedIn: 'root'
})

export class EditlableService {

  constructor(private http:HttpClient,private serviceurl:ServiceUrlService) { }
  editlable : Editlable;

  Editlables(editlable)
  {
    let Editlables = new FormData();
    Editlables.append("editlables", editlable.lable_name);
    return this.http.post(this.serviceurl.host + this.serviceurl.editlables, Editlables);
  }
}

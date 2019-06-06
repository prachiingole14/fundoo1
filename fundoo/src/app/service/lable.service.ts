import { Injectable } from '@angular/core';
import { ServiceUrlService } from '../serviceUrl/service-url.service';
import { HttpClient } from '@angular/common/http';
import { Editlable } from '../model/editlable';

@Injectable({
  providedIn: 'root'
})

export class lableService 
{

  constructor(private http:HttpClient,private serviceurl:ServiceUrlService) { }
  editlable : Editlable;

  addLables(editlable)
  {
    let addlable = new FormData();
    addlable.append("editlables", editlable.lable_name);
    return this.http.post(this.serviceurl.host + this.serviceurl.editlables, addlable);
  }
}

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
    return this.http.post(this.serviceurl.host + this.serviceurl.label, addlable);
  }
  
  getlabels()
  {
    return this.http.post('http://localhost/displaylabels' , {});
  }

  displayLabels(data)
  {
    //debugger;
    let displaylabel = new FormData();
    displaylabel.append("label_id",data);
    return this.http.post(this.serviceurl.host + this.serviceurl.notes,displaylabel);
  }
}

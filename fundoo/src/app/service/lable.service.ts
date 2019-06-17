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
    let addLable = new FormData();
    addLable.append("editlables", editlable.lable_name);    
    return this.http.post('localhost/fundoo1/index.php/addLabel', editlable);
  }
  
  getlabels()
  {
    return this.http.get('http://localhost/fundoo1/index.php/displaylabels' , {});
  }

  // displaylabeles(data)
  // {
  //   //debugger;
  //   let displaylabels = new FormData();
  //   displaylabels.append("label_id",data);
  //   return this.http.post(this.serviceurl.host + this.serviceurl.showlabel,displaylabels);
  // }

  }

  
 


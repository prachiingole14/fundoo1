import { Injectable } from '@angular/core';
import { Notes } from '../model/notes';
import { ServiceUrlService } from '../serviceUrl/service-url.service';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NotesService 
{
  constructor(private http: HttpClient, private serviceurl: ServiceUrlService) { }

  displayNote(data)
  {
   
    let displayNote = new FormData();
    return this.http.post(this.serviceurl.host+this.serviceurl.notes,displayNote);
  }

  changeColor(color,string)
  {
    // debugger;
    let col = new FormData();
    col.append('color',color);
    col.append('string',string)
    return this.http.post(this.serviceurl.host+this.serviceurl.changeColor,col);
  }

}

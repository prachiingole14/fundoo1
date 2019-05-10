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
  title: any;
  description: any;
  constructor(private http:HttpClient,private serviceurl:ServiceUrlService) { }
  notes:Notes;

  addNotes(notes)
  {
    let takeNotes = new FormData();
    //debugger
    takeNotes.append("title", notes.title);
    takeNotes.append("description",notes.description);
    takeNotes.append("color", notes.color);
    takeNotes.append("image", notes.image);
 
    return this.http.post(this.serviceurl.host + this.serviceurl.addNotes , takeNotes);
  }


  displayNote(data)
  {
   
    let displayNote = new FormData();
    return this.http.post(this.serviceurl.host + this.serviceurl.notes,displayNote);
  }

  changeColor(color,string)
  {
    // debugger;
    let col = new FormData();
    col.append('color',color);
    col.append('string',string);
    return this.http.post(this.serviceurl.host+this.serviceurl.changeColor,col);
  }

}
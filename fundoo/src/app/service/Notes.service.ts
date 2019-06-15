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
  httpClient: any;

  constructor( private http:HttpClient, private serviceurl:ServiceUrlService) { }

  notes:Notes;
  
  addNotes(notes)
  {
    let takeNotes = new FormData();
    takeNotes.append("title", notes.title);
    takeNotes.append("description",notes.description);
 
    return this.http.post(this.serviceurl.host + this.serviceurl.notes, takeNotes);
  }

  getcard()
  {
    return this.http.get('http://localhost/fundoo1/index.php/displaynotes' , {});
  }
 
  // displayNotes(data)
  // {
  //   //debugger;
  //   let displayNote = new FormData();
  //   displayNote.append("note_id",data);
  //   return this.http.post(this.serviceurl.host + this.serviceurl.notes,displayNote);
  // }

  changeColor(notes)
  {
    // debugger;
    let color = new FormData();
    color.append('color', notes.color);
    return this.http.post(this.serviceurl.host+this.serviceurl.changeColor,color);
  }

}
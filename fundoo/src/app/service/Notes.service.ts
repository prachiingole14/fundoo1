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
  getlabels() {
    throw new Error("Method not implemented.");
  }
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
    takeNotes.append("reminder",notes);
    return this.http.post('localhost/fundoo1/index.php/addnote',{});
  }

  getcard()
  {
    return this.http.get('http://localhost/fundoo1/index.php/displaynotes' , {});
  }
 

  updateNotes(notes)
  {
    let updateNotes = new FormData();
    updateNotes.append("title", notes.title);
    updateNotes.append("description", notes.description);
    updateNotes.append("reminder", notes.reminder);
    return this.http.post("http://localhost/fundoo1/index.php/setreminder",{})
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

  deletenote()
  {
    return this.http.post('http://localhost/fundoo1/index.php/deletenote',{});
  }


  todayremind(note)
  {
    let reminders = new FormData();
    reminders.append("reminder", note.date_time);
    return this.http.get('http://localhost/fundoo1/index.php/todayreminder',{});
  }

  DeleteReminder(note)
  {
    let deletereminder = new FormData();
    deletereminder.append("date_time", note.deletereminder );
    return this.http.get('localhost/fundoo1/index.php/remind_deleted',{})
  }

  get_Image(note)
  {
    let select_image = new FormData();
    select_image.append("image", note.image);
    return this.http.get('http://localhost/fundoo1/index.php/upload_image', {});
  }

}
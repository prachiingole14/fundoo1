import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/service/Notes.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { HttpHeaders } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-insertnotes',
  templateUrl: './insertnotes.component.html',
  styleUrls: ['./insertnotes.component.scss']
})
export class InsertnotesComponent implements OnInit 
{
  headers: any;
  color: any;
    constructor(private s_notes: NotesService, public dialog:MatDialog, private snack:MatSnackBar) 
    {
      this.headers = new HttpHeaders();
        this.headers.append('Access-Control-Allow-Headers', 'Authorization');
    }
    
    flag=true;
card:any;
    
    ngOnInit() 
    {  }
    model: any = {};

    title=new FormControl(' ',[Validators.required]);
    description=new FormControl(' ',[Validators.required]);

    reverse()
    {
      if(this.title.value == ' ' && this.description.value == ' ')
      {
        this.flag = !this.flag
        console.log("some missing")

        this.model={"title" : this.title.value,
                    "description" : this.description.value}

        let status = this.s_notes.addNotes(this.model)
          status.subscribe(res=>{
          console.log(res);
                
          let snackBarRef = this.snack.open('Label added successfully.....!', 'Undo');});    
      }
      else 
      {
        this.flag = !this.flag
        console.log("done")
      }
    } 

    ChangeColor()
    {
      this.color=this.color;
      console.log(this.color,"change color");
      let snackBarRef = this.snack.open('color changed....!', 'Undo');
    }

    openDialog()
    {
       this.dialog.open(LabelComponent)
    }

    titleError()
    {
      return this.title.hasError('required')?'':''
    }

    descriptionError()
    {
      return this.description.hasError('required')?'':''
    }

    addnotes()
    {

    }
}

import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/service/Notes.service';
import { Validators, FormControl } from '@angular/forms';
import { LabelComponent } from '../label/label.component';
import { HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';
import { lableService } from 'src/app/service/lable.service';

const newLocal = 'This field is empty';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})

export class NotesComponent implements OnInit
{
  //parentMessage = "app-displaycontents";
  // parentMessage = "fgfg"
 
  color:any;
  headers: any;
  label: any;
  note_id: any;
  
    constructor(private s_notes: NotesService, public s_labels: lableService, public dialog:MatDialog, private snack:MatSnackBar) 
    {
      this.headers = new HttpHeaders();
        this.headers.append('Access-Control-Allow-Headers', 'Authorization');
    }
  
  flag=true;
  card:any;
  
  //headerName=FUNDOO;  
    ngOnInit() 
    {
      this.getAllCard()
      this.getAllLabels()
    }
    
    getAllCard()
    {
        this.s_notes.getcard().subscribe(data=>{
          console.log('all notes is ',data);
            this.card=data;
        },
        err=>{
          console.log('error in get notes',err);
        })
    }

   

    getAllLabels()
    {
      this.s_labels.getlabels().subscribe(data=>{
        console.log('labels on note',data);
          this.label=data;
      },
      err=>{
        console.log('get error label on notes',err);
      })
    }
      
    deleteNote()
    {
      this.s_notes.deletenote(this.note_id).subscribe(data =>{
        console.log("note deleted...!");
        this.snack.open("Note move to the trash....!")
      },
      err => {
        console.log("note not deleted...");
        
      })
    }
    

    model: any = {};

    title=new FormControl(' ',[Validators.required]);
    description=new FormControl(' ',[Validators.required]);

    reverse()
    {
      if(this.title.value != ' ' && this.description.value != ' ')
      {
        this.flag = !this.flag
        console.log("done")
      }
      else{
        this.flag = !this.flag
        console.log("all fileds are mendetary....!")
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
}
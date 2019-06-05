import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/service/Notes.service';
import { Validators, FormControl } from '@angular/forms';
import { EditLabelComponent } from '../edit-label/edit-label.component';
import { HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  
    constructor(private s_notes: NotesService, public dialog:MatDialog, private snack:MatSnackBar) 
    {
      this.headers = new HttpHeaders();
        this.headers.append('Access-Control-Allow-Headers', 'Authorization');
    }
    
    flag=true;
card:any;
    
    ngOnInit() 
    {
      this.getAllCard()
    }
    
    getAllCard()
    {
      this.s_notes.getcard().subscribe(data=>{
        console.log('all note is ',data);
this.card=data;
        
      },err=>{
        console.log('error in get note',err);
        
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
       this.dialog.open(EditLabelComponent)
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
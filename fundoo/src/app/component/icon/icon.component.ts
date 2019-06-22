import { Component, OnInit, Input } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import { HttpHeaders } from '@angular/common/http';
import { MatDialog, MatCard, MatCardSmImage } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';

import { from } from 'rxjs';
import { lableService } from 'src/app/service/lable.service';
import { CollabratorComponent } from '../collabrator/collabrator.component';

import { FormControl, Validators } from '@angular/forms';
import { NotesService } from 'src/app/service/Notes.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit 
{

  color: any;

  @Input() alllabels;
  @Input() card;
  
  headers: any;
  lable_id: any;
  date_time : any;

  model: { "date_time": any; };
  time_date: any;
  show :boolean= true;
  image: any;
  constructor(public dialog:MatDialog, private snack : MatSnackBar, public s_notes : NotesService, public s_label : lableService) 
  {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Authorization');
  }

  ngOnInit() 
  {}

  ChangeColor(color)
  {
    this.color=color;
    console.log(this.color,"change color");
  }

  openDialog() 
  {
    this.dialog.open(LabelComponent)
  }

  openCollbrator() 
  {
    this.dialog.open(CollabratorComponent,{
      panelClass:'dailog'
    })
  }

  todayremind()
  {
    this.model={ 
                "date_time" : this.time_date.value  
               };
    //let status = this.reminder.todayremind(this.model)
    this.s_notes.todayremind(this.model).subscribe(res =>{ console.log("reminder is : ",res);
    },
    err=>{
      console.log("error in reminder"); 
    }
    )
  }

     
  deleteNote()
  {
    this.s_notes.deletenote().subscribe(data =>{
      console.log("note deleted...!");
      this.snack.open("Note move to the trash....!")
    },
    err => {
      console.log("note not deleted...");
    })
  }


  insert_image()
  {
    this.s_notes.get_Image(this.model).subscribe(upload=>{
      console.log("image uploaded successfully...!");
    },
    err => {
      console.log("error in uploading image...");
    });
  }
}


  // deleteLabel()
  // {
  //   this.model={"lable_id":this.lable_id.value}

  //     let status = this.s_label.deleteLable(this.model)
  //     status.subscribe(res=>{
  //     console.log(res);

  //     let snackBarRef = this.snack.open('Label deleted.....!', 'Undo');
  //     });
  //   }
  

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
  
  url:'';
  headers: any;
  lable_id: any;
  date_time : any;
  result : any;

  model: { "date_time": any; };
  time_date: any;
  show :boolean= true;
  image: any;
  fulldate: string;
  currentDateAndTime: string;
  timer: boolean;
  isDate: boolean;
  moment: any;
  note_id: any;
  message: string;
  imagePath: any;
  imgURL: string | ArrayBuffer;
  

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
    // this.model={ 
    //             "date_time" : this.time_date.value  
    //            };
    // //let status = this.reminder.todayremind(this.model)
    // this.s_notes.todayremind(this.model).subscribe(res =>{ console.log("reminder is : ",res);
    // },
    // err=>{
    //   console.log("error in reminder"); 
    // }
    // );

      var day = new Date();
      this.fulldate = day.toDateString();
      let currentDate = this.moment(this.fulldate).format("DD/MM/YYYY");
      this.currentDateAndTime = currentDate + " " + " 08:00 PM";
      this.timer = true;
      this.isDate = false;
      console.log(this.currentDateAndTime);

  }
 


     
  deleteNote()
  {
    this.s_notes.deletenote(this.note_id).subscribe(data =>{
      console.log("note deleted...!");
      this.snack.open("Note move to the trash....!")
    },
    err => {
      console.log("error in delete note....");
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


  onSelectFile(event) 
  {
    if (event.target.files && event.target.files[0]) 
    {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {}
    }
  }


  preview(files) 
  {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) 
    {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      console.log(this.imagePath = files);
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
}
  
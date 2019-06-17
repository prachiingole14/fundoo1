import { Component, OnInit, Input } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import { HttpHeaders } from '@angular/common/http';
import { MatDialog, MatCard, MatCardSmImage } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';

import { from } from 'rxjs';
import { lableService } from 'src/app/service/lable.service';
import { CollabratorComponent } from '../collabrator/collabrator.component';
import { Reminder } from 'src/app/model/reminder';
import { ReminderService } from 'src/app/service/reminder.service';

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
  model: { "lable_id": any; };

  constructor(public dialog:MatDialog, private snack : MatSnackBar, public s_label : lableService, public remind : ReminderService) 
  {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Authorization');
  }

  flag=true;

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

  todayRemind(card)
  {
    var date =new Date();
    date.setHours(20,0,0);
    card.reminder =date.getFullYear() + "-" +(date.getMonth()+1) + "-" + date.getDate() + "-" + (date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds());

    this.remind.todayremind(note_id).subscribe(data=>{this.todayRemind.emit({})
      console.log("todays reminder : ", data)
      }
    err => {
      console.log("error in todays remind");
      
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
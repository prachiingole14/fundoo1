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
  date_time : any;
  
  
  model: { "date_time": any; };

  constructor(public dialog:MatDialog, private snack : MatSnackBar, public s_label : lableService, public reminds : ReminderService) 
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
  

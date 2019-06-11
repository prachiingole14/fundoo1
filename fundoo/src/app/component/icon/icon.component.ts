import { Component, OnInit, Input } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import { HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';

import { from } from 'rxjs';
import { lableService } from 'src/app/service/lable.service';
import { CollabratorComponent } from '../collabrator/collabrator.component';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit 
{

  color: any;
  @Input() alllabels;
  headers: any;
  lable_id: any;
  model: { "lable_id": any; };

  constructor(public dialog:MatDialog, private snack : MatSnackBar, public s_label : lableService) 
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

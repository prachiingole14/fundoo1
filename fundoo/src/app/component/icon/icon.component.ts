import { Component, OnInit, Input } from '@angular/core';
import { EditLabelComponent } from '../edit-label/edit-label.component';
import { HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';

import { from } from 'rxjs';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit 
{

  color: any;
 
  @Input() allCard;
  
  headers: any;

  constructor(public dialog:MatDialog, private snack : MatSnackBar) 
  {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Authorization');
  }

  flag=false;

  ngOnInit() 
  {
    
  }

  ChangeColor(color)
  {
    this.color=color;
    console.log(this.color,"change color");
  }
  
  // ChangeColor(color)
  // {
  //   this.color=color;
  //   console.log(this.color,"change color");
  // }


  openDialog() 
  {
    this.dialog.open(EditLabelComponent)
    console.log("its work")
  }


}

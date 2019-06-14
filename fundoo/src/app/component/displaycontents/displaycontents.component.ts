import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/service/Notes.service';
import { HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';
import { LabelComponent } from 'src/app/component/label/label.component'

@Component({
  selector: 'app-displaycontents',
  templateUrl: './displaycontents.component.html',
  styleUrls: ['./displaycontents.component.scss']
})
export class DisplaycontentsComponent implements OnInit 
{
  color: any;
  @Input() allCard;
  headers: any;

  constructor(private s_notes:NotesService, public dialog:MatDialog, private snack : MatSnackBar) 
  {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Authorization');
  }

  flag=false;

  ngOnInit() {}

  ChangeColor(color)
  {
    this.color=color;
    console.log(this.color,"change color");
  }

  openDialog() 
  {
    this.dialog.open(LabelComponent)
  }


}

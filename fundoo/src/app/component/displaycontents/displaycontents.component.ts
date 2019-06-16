import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/service/Notes.service';
import { HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';
import { LabelComponent } from 'src/app/component/label/label.component'
import { lableService } from 'src/app/service/lable.service';

@Component({
  selector: 'app-displaycontents',
  templateUrl: './displaycontents.component.html',
  styleUrls: ['./displaycontents.component.scss']
})
export class DisplaycontentsComponent implements OnInit 
{
  color: any;
  @Input() allCard;
  @Input() alllabels;
  headers: any;
  card: Object;

  constructor(private s_notes:NotesService, public dialog:MatDialog, private snack : MatSnackBar, public label : lableService) 
  {
    this.headers = new HttpHeaders();
    this.headers.append('Access-Control-Allow-Headers', 'Authorization');
  }

  flag=false;

  ngOnInit() {this.allCard;}

  // getCardsearch()
  // {
  //   {
  //     this.s_notes.getcard().subscribe(data=>{
  //       console.log('all notes is ',data);
  //         this.card=data;
  //     },
  //     err=>{
  //       console.log('error in get notes',err);
  //     })
  //   }
   
  // }

}

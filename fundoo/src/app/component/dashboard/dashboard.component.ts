import { Component, OnInit, Inject } from '@angular/core';
import { EditLabelComponent } from '../edit-label/edit-label.component';
import { MatDialog } from '@angular/material';
import { SettingComponent } from '../setting/setting.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit
{
  constructor(public dialog: MatDialog){}
  flag=false;
  value = '';
  ngOnInit() {}

  openDialog()
  {
     this.dialog.open(EditLabelComponent)
  }

  opensettingDialog()
  {
    this.dialog.open(SettingComponent)
  }

}

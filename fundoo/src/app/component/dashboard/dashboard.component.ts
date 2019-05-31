import { Component, OnInit, Inject } from '@angular/core';
import { EditLabelComponent } from '../edit-label/edit-label.component';
import { MatDialog } from '@angular/material';
import { SettingComponent } from '../setting/setting.component';
import { SendfeedbackComponent } from '../sendfeedback/sendfeedback.component';
import { ShortcutkeysComponent } from '../shortcutkeys/shortcutkeys.component'
import { from } from 'rxjs';
import { ProfilePicComponent } from '../profile-pic/profile-pic.component';

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

  openfeedbackDialog()
  {
    this.dialog.open(SendfeedbackComponent)
  }

  shortcutkeys()
  {
    this.dialog.open(ShortcutkeysComponent)
  }

  profile_pic()
  {
    this.dialog.open(ProfilePicComponent)
  }
}

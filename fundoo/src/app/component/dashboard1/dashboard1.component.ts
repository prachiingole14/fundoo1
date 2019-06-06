import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { EditLabelComponent } from '../edit-label/edit-label.component';
import { SettingComponent } from '../setting/setting.component';
import { SendfeedbackComponent } from '../sendfeedback/sendfeedback.component';
import { ShortcutkeysComponent } from '../shortcutkeys/shortcutkeys.component';
import { ProfilePicComponent } from '../profile-pic/profile-pic.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit 
{
  

  constructor(public dialog: MatDialog) { }

  flag=true;
  showFiller = false;
  
  myControl = new FormControl();
 
  ngOnInit() {}

  // openDialog()
  // {
  //   this.dialog.open(EditLabelComponent)
  // }

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

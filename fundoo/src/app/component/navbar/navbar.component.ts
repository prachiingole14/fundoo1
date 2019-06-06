import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EditLabelComponent } from '../edit-label/edit-label.component';
import { SettingComponent } from '../setting/setting.component';
import { SendfeedbackComponent } from '../sendfeedback/sendfeedback.component';
import { ShortcutkeysComponent } from '../shortcutkeys/shortcutkeys.component';
import { ProfilePicComponent } from '../profile-pic/profile-pic.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit 
{

  constructor(public dialog: MatDialog) { }

  flag=true;
  showFiller = false;
  
  myControl = new FormControl();
 
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

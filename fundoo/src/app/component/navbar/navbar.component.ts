import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SettingComponent } from '../setting/setting.component';
import { SendfeedbackComponent } from '../sendfeedback/sendfeedback.component';
import { ShortcutkeysComponent } from '../shortcutkeys/shortcutkeys.component';
import { ProfilePicComponent } from '../profile-pic/profile-pic.component';
import { MatDialog } from '@angular/material';
import { LabelComponent } from '../label/label.component';
import { lableService } from 'src/app/service/lable.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit 
{
  label: any;
  _bottomSheet: any;

  constructor(public dialog: MatDialog,public s_label: lableService) { }

  @Input() alllabel: any;
  
  flag=true;
  showFiller = false;
  headerName="fundoo";
  myControl = new FormControl();
 
  ngOnInit() 
  {
    this.getAllLabels()
  }
  
  openDialog()
  {
    this.dialog.open(LabelComponent)
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

  getAllLabels()
  {
    this.s_label.getlabels().subscribe(data=>{
      console.log('all labels is in',data);
        this.label=data;
    },
    err=>{
            console.log('error in get label',err);
          })
  }

}

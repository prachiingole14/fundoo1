import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { AppMaterialModule } from './app.material.module';
import { RegisterService } from './service/register.service';
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { NotesComponent } from './component/notes/notes.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReminderComponent } from './component/reminder/reminder.component';
import { LabelComponent } from './component/label/label.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { TrashComponent } from './component/trash/trash.component';
import { SettingComponent } from './component/setting/setting.component';
import { SendfeedbackComponent } from './component/sendfeedback/sendfeedback.component';
import { ShortcutkeysComponent } from './component/shortcutkeys/shortcutkeys.component';
import { DisplaycontentsComponent } from './component/displaycontents/displaycontents.component';
import { ProfilePicComponent } from './component/profile-pic/profile-pic.component';
import { InsertnotesComponent } from './component/insertnotes/insertnotes.component';
import { IconComponent } from './component/icon/icon.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Dashboard1Component } from './component/dashboard1/dashboard1.component';
import { EditLabelComponent } from './component/edit-label/edit-label.component';
import { CollabratorComponent } from './component/collabrator/collabrator.component';

//import { Component} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetpasswordComponent,
    RegistrationComponent,
    DashboardComponent,
    NotesComponent,
    ReminderComponent,
    LabelComponent,
    ArchiveComponent,
    TrashComponent,
    SettingComponent,
    SendfeedbackComponent,
    ShortcutkeysComponent,
    DisplaycontentsComponent,
    ProfilePicComponent,
    InsertnotesComponent,
    IconComponent,
    NavbarComponent,
    Dashboard1Component,
    CollabratorComponent,
    
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatInputModule,
    FlexLayoutModule,
    MatDialogModule,
    AppMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],

  providers: [RegisterService],

  bootstrap: [AppComponent]
})

export class AppModule {}
//export class ButtonToggleOverviewExample {}



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NotesComponent } from './component/notes/notes.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { TrashComponent } from './component/trash/trash.component';
import { SettingComponent } from './component/setting/setting.component';
import { SendfeedbackComponent } from './component/sendfeedback/sendfeedback.component';
import { ShortcutkeysComponent } from './component/shortcutkeys/shortcutkeys.component';
import { DisplaycontentsComponent } from './component/displaycontents/displaycontents.component';
import { ProfilePicComponent } from './component/profile-pic/profile-pic.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { InsertnotesComponent } from './component/insertnotes/insertnotes.component';
import { LabelComponent } from 'src/app/component/label/label.component';
import { IconComponent } from './component/icon/icon.component';
import { CollabratorComponent } from './component/collabrator/collabrator.component';

const routes: Routes = [
    {
      path:'',
      component:LoginComponent
    },

    {
      path: 'displaycontents',
      component : DisplaycontentsComponent,
    },

    {
      path: 'reset',
      component : ResetpasswordComponent
    },

    {
      path: 'registration',
      component : RegistrationComponent
    },

    {
      path: 'dashboard',
      component : DashboardComponent, 
    },

    {
      path: 'navbar',
      component : NavbarComponent,

        children: [
            {
              path: 'notes',
              component : NotesComponent,
            },

            {
              path: 'reminder',
              component : ReminderComponent,
            },

            {
              path: 'label',
              component : LabelComponent,
            },

            {
              path: 'archive',
              component : ArchiveComponent,
            },


            {
              path: 'trash',
              component : TrashComponent,
            },

            {
              path: 'setting',
              component : SettingComponent,
            },
            
            {
              path: 'sendfeedback',
              component : SendfeedbackComponent,
            },

            {
              path: 'shortcutkeys',
              component : ShortcutkeysComponent,
            },

            {
              path: 'profilepic',
              component : ProfilePicComponent,
            },

            {
              path:'insertnotes',
              component : InsertnotesComponent,
            }
        ]
    },

    {
      path: 'icon',
      component : IconComponent
    },

    {
      path: 'collabrator',
      component : CollabratorComponent
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

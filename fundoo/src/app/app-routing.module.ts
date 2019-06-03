import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NotesComponent } from './component/notes/notes.component';
import { from } from 'rxjs';
import { ReminderComponent } from './component/reminder/reminder.component';
import { EditLabelComponent } from './component/edit-label/edit-label.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { TrashComponent } from './component/trash/trash.component';
import { SettingComponent } from './component/setting/setting.component';
import { SendfeedbackComponent } from './component/sendfeedback/sendfeedback.component';
import { ShortcutkeysComponent } from './component/shortcutkeys/shortcutkeys.component';
import { DisplaycontentsComponent } from './component/displaycontents/displaycontents.component';
import { ProfilePicComponent } from './component/profile-pic/profile-pic.component';
import { Dashboard1Component} from './component/dashboard1/dashboard1.component';
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
      path: 'dashboard1',
      component : Dashboard1Component,

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
              path: 'edit-label',
              component : EditLabelComponent,
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
        ]
    },

    

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

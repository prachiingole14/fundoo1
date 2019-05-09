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

const routes: Routes = [
    {
      path:'',
      component:LoginComponent
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
       
      ]
    },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

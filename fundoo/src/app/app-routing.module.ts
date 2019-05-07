import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { DashboardComponent } from './component/dashboard1/dashboard.component';
import { NotesComponent } from './component/notes/notes.component';
import { from } from 'rxjs';
import { ReminderComponent } from './component/reminder/reminder.component';

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
      path: 'dashboard1',
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
       
      ]
    },
    {
      path: 'dashboard',
      component : DashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

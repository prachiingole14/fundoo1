import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { RegistrationComponent } from './component/registration/registration.component';
//import { DashboardComponent } from "./component/dashboard11/DashboardComponent";
import { NotesComponent } from './component/notes/notes.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

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
      component : DashboardComponent
    },

    // {
    //   path: 'dashboard11',
    //   component : DashboardComponent
    // },

    {
      path: 'notes',
      component : NotesComponent
    },

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


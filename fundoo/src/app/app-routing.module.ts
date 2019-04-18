import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { RegistrationComponent } from './component/registration/registration.component';


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

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { constants } from 'os';
//import { UserRegistrationComponent } from './app/components/user-registration.component';

const routes: Routes = [
/*
  {
    path: 'user-registration' , component : UserRegistrationComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 // exports: [user-registration ]
})




export class AppRoutingModule {}
//export class UserRegistrationComponent{}

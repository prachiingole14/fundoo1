import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
// import { CardOverviewExample }  from '../../src/app/module/app.material.module'
@Component({
 

})

@NgModule(
  {
    declarations: 
    [
      AppComponent,
      UserRegistrationComponent,
    ],

    imports: 
    [
      BrowserModule,
      AppRoutingModule
    ],

    providers: [],

    bootstrap: 
    [
      AppComponent
    ]
})

export class AppModule { }
export class CardOverviewExample {}
export class Register {}

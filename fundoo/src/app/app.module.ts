import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatDialogModule} from '@angular/material/dialog';
import { AppMaterialModule } from './app.material.module';
import { RegisterService } from './service/register.service';



//import { Component} from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetpasswordComponent,
    RegistrationComponent,

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
    RegisterService
  ],
    



  providers: [],

  bootstrap: [AppComponent]
  
})

export class AppModule { }
//export class ButtonToggleOverviewExample {}



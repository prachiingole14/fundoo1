import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, FormGroup } from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
     
    ],
  
    imports: [
      MatCardModule,
      MatFormFieldModule,
      MatButtonToggleModule,
      // BrowserModule,
      // ReactiveFormsModule,
      MatButtonModule,
      
      // FormsModule,
      // FormControl, FormGroup,
     
    ],

    exports:[
      MatCardModule,
      MatFormFieldModule,
      MatButtonToggleModule,
      // BrowserModule,
      // ReactiveFormsModule,
      MatButtonModule,
      // FormsModule,
      // FormControl, FormGroup,
    
    ],
  
    providers: [],
  
    bootstrap: []
  
  })

  export class AppMaterialModule {
  }
  //export class ButtonToggleOverviewExample {}
  
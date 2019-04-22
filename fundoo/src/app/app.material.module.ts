import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';

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
  
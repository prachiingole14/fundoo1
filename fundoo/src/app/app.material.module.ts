import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule} from '@angular/common/http';
//import {CommonModule} from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { from } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
    declarations: [
     
    ],
  
    imports: [
      MatCardModule,
      MatFormFieldModule,
      MatButtonToggleModule,
      HttpClientModule,
      MatDividerModule,
      MatMenuModule,
      MatIconModule,
      MatProgressSpinnerModule
    ],

    exports:[
      MatCardModule,
      MatFormFieldModule,
      MatButtonToggleModule,
      MatButtonModule,
      MatDividerModule,
      MatMenuModule,
      MatIconModule,
      MatProgressSpinnerModule
    ],
  
    providers: [],
  
    bootstrap: []
  
  })

  export class AppMaterialModule {
  }
  //export class ButtonToggleOverviewExample {}
  
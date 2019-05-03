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
import {MatTooltipModule} from '@angular/material/tooltip'
import { MatSidenavModule,MatListModule} from '@angular/material';

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
      MatProgressSpinnerModule,
      MatTooltipModule,
      MatSidenavModule,
      MatListModule,
 
     //NgMatSearchBarModule
    ],

    exports:[
      MatCardModule,
      MatFormFieldModule,
      MatButtonToggleModule,
      MatButtonModule,
      MatDividerModule,
      MatMenuModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      MatSidenavModule,
      MatListModule,

     // NgMatSearchBarModule
    ],
  
    providers: [],
  
    bootstrap: []

  
  
  })

  export class AppMaterialModule {
    
  }
  //export class ButtonToggleOverviewExample {}
  
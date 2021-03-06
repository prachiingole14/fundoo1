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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip'
import { MatSidenavModule,MatListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import { BrowserModule } from '@angular/platform-browser';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
    declarations: [],
  
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
      BrowserAnimationsModule,
      NoopAnimationsModule,
      MatDatepickerModule,
      MatInputModule,
      MatCheckboxModule,
      MatGridListModule,
      MatTabsModule,
      DragDropModule,
      MatSnackBarModule,
      MatToolbarModule,
      MatChipsModule,
      BrowserModule,
      ImageCropperModule
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
      BrowserAnimationsModule,
      NoopAnimationsModule,
      MatDatepickerModule,
      MatInputModule,
      MatCheckboxModule,
      MatGridListModule,
      MatTabsModule,
      DragDropModule,
      MatSnackBarModule,
      MatToolbarModule,
      MatChipsModule,
      BrowserModule,
      ImageCropperModule
    ],
  
    providers: [],
    bootstrap: []

  })

  export class AppMaterialModule {}

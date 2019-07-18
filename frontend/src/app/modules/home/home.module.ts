import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../../shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadModule } from '../upload/upload.module';
import { ViewModule } from '../view/view.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UploadModule,
    ViewModule,
    BrowserAnimationsModule
  ]
})
export class HomeModule { }

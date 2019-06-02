import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './components/upload/upload.component';
import { MaterialModule } from '../../shared/material/material.module';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [UploadComponent]
})
export class UploadModule { }

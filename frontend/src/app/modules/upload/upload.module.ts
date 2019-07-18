import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './components/upload/upload.component';
import { MaterialModule } from '../../shared/material/material.module';
import { DeleteDialogComponent } from '../../shared/components/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [UploadComponent],
  entryComponents: [DeleteDialogComponent]
})
export class UploadModule { }

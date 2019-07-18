import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadViewContainerComponent } from './containers/upload-view-container/upload-view-container.component';
import { MaterialModule } from '../../shared/material/material.module';
import { UploadViewComponent } from './components/upload-view/upload-view.component';

@NgModule({
  declarations: [UploadViewContainerComponent, UploadViewComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [UploadViewContainerComponent]
})
export class ViewModule { }

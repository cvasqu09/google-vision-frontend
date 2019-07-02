import { ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { UploadService } from '../../../../shared/services/upload.service';
import { Upload } from '../../models/upload.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  selectedFile: File;

  @ViewChild('inputFile')
  inputFile: ElementRef;

  constructor(private uploadService: UploadService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  detectFile(event) {
    this.selectedFile = event.target.files[0];
    this.cd.detectChanges();
  }

  uploadFile() {
    const upload = new Upload(this.selectedFile);
    this.uploadService.upload(upload);
  }

  openFileSelection() {
    this.inputFile.nativeElement.click();
  }

  removeSelectedFile() {
    this.inputFile.nativeElement.value = '';
    this.selectedFile = null;
    this.cd.detectChanges();
  }

}

import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../../../shared/services/upload.service';
import { Upload } from '../../models/upload.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  selectedFile: File;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  detectFile(event) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    const upload = new Upload(this.selectedFile);
    this.uploadService.upload(upload);
  }

}

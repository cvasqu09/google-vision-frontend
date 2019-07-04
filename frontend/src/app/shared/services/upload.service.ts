import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Upload } from '../../modules/upload/models/upload.model';
import { NotificationService } from './notification.service';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private fireStorage: AngularFireStorage, private notificationService: NotificationService) { }

  async upload(upload: Upload) {
    this.fireStorage.storage.ref();
    const testRef = this.fireStorage.storage.ref().child(`${upload.name}`);
    return testRef.put(upload.file).then((snapshot) => {
      this.notificationService.notify(`Successfully uploaded ${upload.name}`);
    }).catch((err) => {
      this.notificationService.notify(`Failed to upload ${upload.name}`);
    });
  }
}

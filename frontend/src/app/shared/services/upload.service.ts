import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Upload } from '../../modules/upload/models/upload.model';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private fireStorage: AngularFireStorage) { }

  upload(upload: Upload) {
    this.fireStorage.storage.ref();
    const testRef = this.fireStorage.storage.ref().child(`${upload.name}.txt`);
    testRef.put(upload.file).then((snapshot) => {
      console.log('uploaded file', snapshot);
    }).catch((err) => {
      console.log('Error while uploading file', err);
    });
  }
}

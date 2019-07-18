import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { NotificationService } from '../../../../shared/services/notification.service';
import { FirebaseItem } from '../../models/FirebaseItem';

@Component({
  selector: 'app-upload-view-container',
  templateUrl: './upload-view-container.component.html',
  styleUrls: ['./upload-view-container.component.scss']
})
export class UploadViewContainerComponent implements OnInit {
  items: FirebaseItem[];

  constructor(private fireStorage: AngularFireStorage, private notificationService: NotificationService) { }

  ngOnInit() {
    const rootRef = this.fireStorage.storage.ref();
    rootRef.listAll().then(async (res) => {
      this.items = await Promise.all(res.items.map(async (item) => {
        const url = await item.getDownloadURL();
        console.log('mapping', url);
        return { name: item.name, bucket: item.bucket, fullPath: item.fullPath, downloadURL: url } as FirebaseItem;
      }));
    }).catch(() => {
      this.notificationService.notify('Error retrieving uploaded screenshots');
    });
  }

}

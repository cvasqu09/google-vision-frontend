import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss']
})
export class NotificationBarComponent implements OnInit {

  constructor(private notificationBar: MatSnackBar, private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifications().subscribe(message => {
      this.openNotification(message);
    });
  }

  openNotification(message: string) {
    this.notificationBar.open(message, 'Close', {
      duration: 2000
    });
  }

}

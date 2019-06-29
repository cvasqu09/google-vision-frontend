import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSub = new Subject<string>();

  constructor() { }

  notifications(): Observable<string> {
    return this.notificationSub.asObservable();
  }

  notify(message: string): void {
    this.notificationSub.next(message);
  }
}

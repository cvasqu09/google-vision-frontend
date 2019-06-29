import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationBarComponent } from './notification-bar.component';
import { MaterialModule } from '../../material/material.module';
import { MatSnackBar } from '@angular/material';
import { NotificationService } from '../../services/notification.service';
import createSpyObj = jasmine.createSpyObj;
import { of } from 'rxjs';

describe('NotificationBarComponent', () => {
  let component: NotificationBarComponent;
  let fixture: ComponentFixture<NotificationBarComponent>;
  const mockNotificationService = createSpyObj('NotificationService', ['notifications']);

  beforeEach(async(() => {
    mockNotificationService.notifications.and.returnValue(of('my message'));
    TestBed.configureTestingModule({
      declarations: [ NotificationBarComponent ],
      imports: [MaterialModule],
      providers: [MatSnackBar, {provide: NotificationService, useValue: mockNotificationService}]
    })
    .compileComponents();
    fixture = TestBed.createComponent(NotificationBarComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should listen for notifications and call openNotifications when one comes in', () => {
    const componentNotificationSpy = spyOn(component, 'openNotification');

    fixture.detectChanges();

    expect(componentNotificationSpy).toHaveBeenCalledWith('my message');
  });

  it('should call the notification snack bar open when open notification', () => {
    const notificationBar = TestBed.get(MatSnackBar);
    const notificationBarSpy = spyOn(notificationBar, 'open');

    component.openNotification('hello');

    expect(notificationBarSpy).toHaveBeenCalledWith('hello', 'Close', { duration: 3000});
  });
});

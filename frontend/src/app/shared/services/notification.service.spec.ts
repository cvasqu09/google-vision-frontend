import { NotificationService } from './notification.service';
import { Observable } from 'rxjs';

describe('NotificationService', () => {
  let notificationService: NotificationService;

  beforeEach(() => {
    notificationService = new NotificationService();
  });

  it('should be created', () => {
    expect(notificationService).toBeTruthy();
  });

  it('should return the notifications subject as an observable',async () => {
    notificationService.notify('test me');
    const result: Observable<string> = notificationService.notifications();

    expect(result).toBeTruthy();
  });
});

import { AuthService } from './auth.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

describe('AuthService', () => {
  let authService: AuthService;
  let fireBaseSpy;
  let notificationServiceSpy;
  let router;

  beforeEach(() => {
    fireBaseSpy = jasmine.createSpyObj('AngularFireAuth', ['auth']);
    fireBaseSpy.auth = jasmine.createSpyObj('auth', ['signInWithEmailAndPassword', 'signOut']);
    notificationServiceSpy = jasmine.createSpyObj('NotificationService', ['notify']);
    router = jasmine.createSpyObj('Router', ['navigate']);
    authService = new AuthService(fireBaseSpy, notificationServiceSpy, router);

  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should login with correct credentials', async () => {
    fireBaseSpy.auth.signInWithEmailAndPassword.and.returnValue(Promise.resolve('logged in'));

    await authService.login('good email', 'password');

    expect(notificationServiceSpy.notify).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should not route with bad credentials', async () => {
    fireBaseSpy.auth.signInWithEmailAndPassword.and.returnValue(Promise.reject('bad password'));

    await authService.login('bad', 'boom');

    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should notify when successfully logged out', async () => {
    fireBaseSpy.auth.signOut.and.returnValue(Promise.resolve('signed out'));

    await authService.logout();

    expect(notificationServiceSpy.notify).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should not navigate when error occurs', async () => {
    fireBaseSpy.auth.signOut.and.returnValue(Promise.reject('failed to logout'));

    await authService.logout();

    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should return if a user is not authenticated', () => {
    fireBaseSpy.auth.currentUser = null;

    expect(authService.isAuthenticated()).toBeFalsy();
  });

  it('should return if a user is authenticated', () => {
    fireBaseSpy.auth.currentUser = { id: '123' };

    expect(authService.isAuthenticated()).toBeTruthy();
  });
});

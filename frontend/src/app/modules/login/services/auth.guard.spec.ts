import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import createSpyObj = jasmine.createSpyObj;

describe('AuthGuard', () => {
  const mockAuthService = createSpyObj('AuthService', ['isAuthenticated']);
  const mockRouter = createSpyObj('Router', ['navigate']);
  let authGuard;
  beforeEach(() => {
    authGuard = new AuthGuard(mockAuthService, mockRouter);
  });

  describe('user is authenticated', () => {
    beforeEach(() => {
      mockAuthService.isAuthenticated.and.returnValue(true);
    });

    it('return true when canActivate', () => {
      expect(authGuard.canActivate()).toBeTruthy();
    });

    it('return true when canActivateChildren', () => {
      expect(authGuard.canActivateChild()).toBeTruthy();
    });
  });

});

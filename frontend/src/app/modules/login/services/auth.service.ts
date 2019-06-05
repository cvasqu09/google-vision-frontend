import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { last, map, startWith, takeLast } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NotificationService } from '../../../shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private notificationService: NotificationService, private router: Router) { }

  login(email: string, password: string) {
    this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        this.notificationService.notify('Error logging in. Please try again.');
      });
  }

  logout() {
    this.fireAuth.auth.signOut().then(() => {
      this.notificationService.notify('Successfully logged out.');
      this.router.navigate(['/login']);
    }).catch(() => {
      this.notificationService.notify('Error logging out. Please try again');
    });
  }

  isAuthenticated(): Observable<boolean> {
    return this.fireAuth.user.pipe(
      last(),
      startWith(null),
      map(user => {
        return !!user;
      }));
  }
}

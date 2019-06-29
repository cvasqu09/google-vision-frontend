import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeModule } from '../../home.module';
import { AuthService } from '../../../login/services/auth.service';
import { NotificationService } from '../../../../shared/services/notification.service';
import { RouterTestingModule } from '@angular/router/testing';
import createSpyObj = jasmine.createSpyObj;

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let auth: AuthService;
  beforeEach(async () => {
    auth = createSpyObj('AuthService', ['logout']);
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [HomeModule, RouterTestingModule],
      providers: [{ provide: AuthService, useValue: auth }, NotificationService,]
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('logout should use authService to logout', () => {
    component.logout();
    expect(auth.logout).toHaveBeenCalled();
  });
});

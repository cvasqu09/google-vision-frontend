import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MaterialModule } from '../../../../shared/material/material.module';
import { AuthService } from '../../services/auth.service';
import createSpyObj = jasmine.createSpyObj;
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement, ElementRef } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuth: AuthService;
  let loginDebug: DebugElement;

  beforeEach(async () => {
    mockAuth = createSpyObj('AuthService', ['login']);
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [MaterialModule, FormsModule, ReactiveFormsModule],
      providers: [{ provide: AuthService, useValue: mockAuth }]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loginDebug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call attempt to login when the login button is pressed with the given email and password', async() => {
    const loginButton = loginDebug.query(By.css('button'));
    component.loginForm.setValue({email: 'test', password: 'mypass'});

    loginButton.triggerEventHandler('click', null);

    expect(mockAuth.login).toHaveBeenCalledWith('test', 'mypass');
  });
});

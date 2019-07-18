import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadViewContainerComponent } from './upload-view-container.component';

describe('UploadViewContainerComponent', () => {
  let component: UploadViewContainerComponent;
  let fixture: ComponentFixture<UploadViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadViewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

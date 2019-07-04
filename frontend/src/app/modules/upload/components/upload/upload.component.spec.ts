import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadComponent } from './upload.component';
import { MaterialModule } from '../../../../shared/material/material.module';
import createSpyObj = jasmine.createSpyObj;
import { UploadService } from '../../../../shared/services/upload.service';
import createSpy = jasmine.createSpy;
import { Upload } from '../../models/upload.model';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;
  const mockUploadService = createSpyObj('UploadService', ['upload']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadComponent],
      imports: [MaterialModule],
      providers: [{ provide: UploadService, useValue: mockUploadService }]
    })
      .compileComponents();
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('uploadFile should use the upload service to upload the selected file', () => {
    const dummyFile = new File(['blob'] ,'dummyFile');
    const event: any = { target: { files: [dummyFile]}};

    component.detectFile(event);
    component.uploadFile();

    expect(mockUploadService.upload).toHaveBeenCalled();
  });

  it('should trigger the click of the inputFile reference when openFileSelection is called', () => {
    const clickSpy = spyOn(component.inputFile.nativeElement, 'click');

    component.openFileSelection();

    expect(clickSpy).toHaveBeenCalled();
  });

  it('should reset the input file value to empty when removeSelectedFile is called', () => {
    const dummyFile = new File(['blob'] ,'dummyFile');
    const event: any = { target: { files: [dummyFile]}};

    component.detectFile(event);
    expect(component.selectedFile.name).toEqual('dummyFile');

    component.removeSelectedFile();
    expect(component.inputFile.nativeElement.value).toEqual('');
    expect(component.selectedFile).toBeFalsy();
  });
});

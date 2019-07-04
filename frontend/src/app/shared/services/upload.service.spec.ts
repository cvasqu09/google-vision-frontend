import { TestBed } from '@angular/core/testing';

import { UploadService } from './upload.service';
import createSpyObj = jasmine.createSpyObj;
import { Upload } from '../../modules/upload/models/upload.model';

describe('UploadService', () => {
  let service: UploadService;
  const putSpy = createSpyObj('child', ['child', 'put']);
  const mockFile = createSpyObj('File', ['name']);
  const mockFireStorage: any = {
    storage: {
      ref: () => {
        return {
          child: () => putSpy
        };
      }
    }
  };
  const mockNotificationService = createSpyObj('NotificationService', ['notify']);

  beforeEach(() => {
    service = new UploadService(mockFireStorage, mockNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should upload file', async () => {
    putSpy.put.and.returnValue(Promise.resolve('resolved'));
    mockFile.name = 'test.txt';
    await service.upload(new Upload(mockFile));

    expect(putSpy.put).toHaveBeenCalled();
    expect(mockNotificationService.notify).toHaveBeenCalledWith('Successfully uploaded test.txt');
  });

  it('should notify when an error occurs', async () => {
    putSpy.put.and.returnValue(Promise.reject('boom'));
    mockFile.name = 'test.txt';
    await service.upload(new Upload(mockFile));

    expect(putSpy.put).toHaveBeenCalled();
    expect(mockNotificationService.notify).toHaveBeenCalledWith('Failed to upload test.txt');
  });
});

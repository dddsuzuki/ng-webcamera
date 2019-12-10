import { TestBed } from '@angular/core/testing';

import { NgWebcameraService } from './ng-webcamera.service';

describe('NgWebcameraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgWebcameraService = TestBed.get(NgWebcameraService);
    expect(service).toBeTruthy();
  });
});

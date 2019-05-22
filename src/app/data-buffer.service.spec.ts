import { TestBed, inject } from '@angular/core/testing';

import { DataBufferService } from './data-buffer.service';

describe('DataBufferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataBufferService]
    });
  });

  it('should be created', inject([DataBufferService], (service: DataBufferService) => {
    expect(service).toBeTruthy();
  }));
});

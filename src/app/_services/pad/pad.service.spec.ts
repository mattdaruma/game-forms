import { TestBed } from '@angular/core/testing';

import { PadService } from './pad.service';

describe('PadService', () => {
  let service: PadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

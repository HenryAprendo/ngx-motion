import { TestBed } from '@angular/core/testing';

import { NgxMotionService } from './ngx-motion.service';

describe('NgxMotionService', () => {
  let service: NgxMotionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMotionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

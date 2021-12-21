import { TestBed } from '@angular/core/testing';

import { CoursesSevicesService } from './courses-sevices.service';

describe('CoursesSevicesService', () => {
  let service: CoursesSevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesSevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

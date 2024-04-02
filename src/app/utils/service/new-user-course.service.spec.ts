import { TestBed } from '@angular/core/testing';

import { NewUserCourseService } from './new-user-course.service';

describe('NewUserCourseService', () => {
  let service: NewUserCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewUserCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

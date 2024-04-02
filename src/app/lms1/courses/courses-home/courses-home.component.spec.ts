import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesHomeComponent } from './courses-home.component';

describe('CoursesHomeComponent', () => {
  let component: CoursesHomeComponent;
  let fixture: ComponentFixture<CoursesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesHomeComponent]
    });
    fixture = TestBed.createComponent(CoursesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

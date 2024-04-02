import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lms1Component } from './lms1.component';

describe('Lms1Component', () => {
  let component: Lms1Component;
  let fixture: ComponentFixture<Lms1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lms1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

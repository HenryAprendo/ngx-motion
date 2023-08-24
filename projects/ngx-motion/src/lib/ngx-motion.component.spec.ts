import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMotionComponent } from './ngx-motion.component';

describe('NgxMotionComponent', () => {
  let component: NgxMotionComponent;
  let fixture: ComponentFixture<NgxMotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMotionComponent]
    });
    fixture = TestBed.createComponent(NgxMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

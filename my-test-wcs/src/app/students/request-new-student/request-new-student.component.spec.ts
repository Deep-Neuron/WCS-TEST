import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNewStudentComponent } from './request-new-student.component';

describe('RequestNewStudentComponent', () => {
  let component: RequestNewStudentComponent;
  let fixture: ComponentFixture<RequestNewStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestNewStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestNewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

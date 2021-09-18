import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsListComponent } from './requests-list.component';

import { HttpClientModule } from '@angular/common/http';

describe('RequestsListComponent', () => {
  let component: RequestsListComponent;
  let fixture: ComponentFixture<RequestsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsListComponent ],
	  imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

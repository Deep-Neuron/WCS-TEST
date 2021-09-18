import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CharactersComponent } from './characters.component';

import { HttpClientModule } from '@angular/common/http';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersComponent ],
	  imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  
	it('should contain select', () => { 
		const selectElement = fixture.debugElement.nativeElement.querySelector('#selectID');
		expect(selectElement.innerHTML).not.toBeNull();
	});
	

  
});

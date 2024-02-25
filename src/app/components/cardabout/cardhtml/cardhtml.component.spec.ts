import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardhtmlComponent } from './cardhtml.component';

describe('CardhtmlComponent', () => {
  let component: CardhtmlComponent;
  let fixture: ComponentFixture<CardhtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardhtmlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardhtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

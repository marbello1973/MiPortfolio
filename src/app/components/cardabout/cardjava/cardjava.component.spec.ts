import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardjavaComponent } from './cardjava.component';

describe('CardjavaComponent', () => {
  let component: CardjavaComponent;
  let fixture: ComponentFixture<CardjavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardjavaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardjavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

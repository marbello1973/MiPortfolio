import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardangularComponent } from './cardangular.component';

describe('CardangularComponent', () => {
  let component: CardangularComponent;
  let fixture: ComponentFixture<CardangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardangularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcssComponent } from './cardcss.component';

describe('CardcssComponent', () => {
  let component: CardcssComponent;
  let fixture: ComponentFixture<CardcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardcssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

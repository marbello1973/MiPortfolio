import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardskillComponent } from './cardskill.component';

describe('CardskillComponent', () => {
  let component: CardskillComponent;
  let fixture: ComponentFixture<CardskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardskillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

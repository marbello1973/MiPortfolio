import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardreactComponent } from './cardreact.component';

describe('CardreactComponent', () => {
  let component: CardreactComponent;
  let fixture: ComponentFixture<CardreactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardreactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardreactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

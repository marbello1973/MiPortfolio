import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardjavascriptComponent } from './cardjavascript.component';

describe('CardjavascriptComponent', () => {
  let component: CardjavascriptComponent;
  let fixture: ComponentFixture<CardjavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardjavascriptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardjavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

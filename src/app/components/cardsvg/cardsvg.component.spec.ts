import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsvgComponent } from './cardsvg.component';

describe('CardsvgComponent', () => {
  let component: CardsvgComponent;
  let fixture: ComponentFixture<CardsvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardprojectComponent } from './cardproject.component';

describe('CardprojectComponent', () => {
  let component: CardprojectComponent;
  let fixture: ComponentFixture<CardprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

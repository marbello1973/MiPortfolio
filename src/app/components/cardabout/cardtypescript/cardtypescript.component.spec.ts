import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtypescriptComponent } from './cardtypescript.component';

describe('CardtypescriptComponent', () => {
  let component: CardtypescriptComponent;
  let fixture: ComponentFixture<CardtypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardtypescriptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardtypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsInicioComponent } from './buttons-inicio.component';

describe('ButtonsInicioComponent', () => {
  let component: ButtonsInicioComponent;
  let fixture: ComponentFixture<ButtonsInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsInicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

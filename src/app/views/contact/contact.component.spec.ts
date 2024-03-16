import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form', () => {
    const compiled = fixture.nativeElement;
    const form = compiled.querySelector('form');
    expect(form).toBeTruthy();
  });

  it('render label for name', () => {
    const compiled = fixture.nativeElement;
    const labelName = compiled.querySelector('label[for="name"]');
    const labelEmail = compiled.querySelector('label[for="email"]');
    const labelMessage = compiled.querySelector('label[for="message"]');
    expect(labelName).toBeTruthy();
    expect(labelEmail).toBeTruthy();
    expect(labelMessage).toBeTruthy();
  })

  it('render input for name', () => {
    const compiled = fixture.nativeElement;
    const inputElementName = compiled.querySelector('input[name="name"]');
    const inputElementEmail = compiled.querySelector('input[name="email"]');
    const inputElementMessage = compiled.querySelector('textarea[name="message"]');
    expect(inputElementName).toBeTruthy();
    expect(inputElementEmail).toBeTruthy();
    expect(inputElementMessage).toBeTruthy();   

  })

  it('should bind input value to component property', ()=> {
    const inputElementName = fixture.nativeElement.querySelector('input');
    
    //simular la entrada del evento    
    inputElementName.value = 'David Marbello';
    inputElementName.dispatchEvent(new Event('input'));   
  

    //verificar la propiedad name del componente sea igual al valor del input
    expect(component.name.value).toEqual('David Marbello');
  })

  it('El campo email y mensaje debe estar deshabilitado si el campo nombre esta vacio', () => {

    const compiled = fixture.nativeElement;
    const inputElementName = compiled.querySelector('input[name="name"]');
    const inputElementEmail = compiled.querySelector('input[name="email"]');
    const inputElementMessage = compiled.querySelector('textarea[name="message"]');

    inputElementName.value = '';
    inputElementName.dispatchEvent(new Event('input'));

    expect(inputElementEmail.disabled).toBeTruthy();
    expect(inputElementMessage.disabled).toBeTruthy();
    
  })




  // it('should have name, email and message form controls', () => {

  //   const compiled = fixture.nativeElement;
  //   const form = compiled.querySelector('form');
  //   expect(form).toBeTruthy();

  //   const nameInput = compiled.querySelector('input[name="name"]');
  //   expect(nameInput).toBeTruthy();

  //   const emailInput = compiled.querySelector('input[name="email"]');
  //   expect(emailInput).toBeTruthy();

  //   const messageInput = compiled.querySelector('textarea[name="message"]');
  //   expect(messageInput).toBeTruthy();
    
  // })
  
  it('should have submit button', () => {
    const compiled = fixture.nativeElement;
    const submitButton = compiled.querySelector('button[type="submit"]');
    expect(submitButton).toBeTruthy();
  });


});

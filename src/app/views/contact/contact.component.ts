import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200)
      ]]
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.myForm.valid) {
      // Aquí puedes enviar los datos a tu backend
      const formData = this.myForm.value;
      console.log('Datos del formulario:', formData);

      // Mostrar mensaje de éxito
      window.alert('¡Mensaje enviado con éxito!');

      // Resetear formulario
      this.myForm.reset();

      // Opcional: Marcar el formulario como "pristine" después de reset
      this.myForm.markAsPristine();
      this.myForm.markAsUntouched();

    } else {
      // Marcar todos los campos como "touched" para mostrar errores
      this.markAllAsTouched();
      window.alert('Por favor, completa correctamente todos los campos.');
    }
  }

  private markAllAsTouched(): void {
    Object.values(this.myForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  // Helper para acceder fácilmente a los controles en el template
  get name() { return this.myForm.get('name'); }
  get email() { return this.myForm.get('email'); }
  get message() { return this.myForm.get('message'); }
}




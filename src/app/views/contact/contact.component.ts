import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  myForm!: FormGroup;
  public regexEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  public name: FormControl<string | null> = new FormControl('',[Validators.required, Validators.minLength(2)]);
  public email: FormControl<string | null> = new FormControl('',[Validators.required, Validators.email, Validators.pattern(this.regexEmail)]) 
  public message: FormControl<string | null> = new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(200)])  
     
  constructor(private fb: FormBuilder) {} 

  ngOnInit() {
    this.myForm = this.fb.group({
      name: [''],
      email: [''],
      message: ['']
    })     
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.myForm.valid) {
      window.alert('Formulario válido');
      this.myForm.reset();
      this.myForm.controls['name'].setValue('');      
      this.myForm.controls['email'].setValue('');
      this.myForm.controls['message'].setValue('');            
    } else {
      window.alert('Formulario inválido');
    }
  } 
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { ProjectComponent } from './views/project/project.component';
import { ContactComponent } from './views/contact/contact.component';
import { ButtonsInicioComponent } from './components/buttons-inicio/buttons-inicio.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    CommonModule, 
    RouterModule, 
    NavbarComponent, 
    HomeComponent, 
    AboutComponent, 
    ProjectComponent, 
    ContactComponent,
    ButtonsInicioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {  
}
 

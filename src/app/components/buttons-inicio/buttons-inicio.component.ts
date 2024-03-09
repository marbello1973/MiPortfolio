import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-buttons-inicio',
  standalone: true,
  imports: [ RouterModule, NavbarComponent],
  templateUrl: './buttons-inicio.component.html',
  styleUrl: './buttons-inicio.component.css'
})
export class ButtonsInicioComponent {

  @ViewChild('dm') dm!: ElementRef; 

  public async onFloatClick(){ 
    
    const dm = await this.router.navigate([`${this.dm}`]);

    if(dm) document.scrollingElement?.scrollTo(0, 0); 
       
  }

  constructor(private router: Router) { }

}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent   {

  isMenuOpen = false;

  constructor(private router: Router) { }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      this.isMenuOpen = false;
    }
  }

  toggleMenu(): void {   
      this.isMenuOpen = !this.isMenuOpen;
  }

  @ViewChild('span1') span1!: ElementRef;


  




  // menuButton: boolean = false;

  // showMenu(){
  //   this.menuButton = !this.menuButton;
  // }
  
  // @ViewChild('menuResp') menuResp!: ElementRef;
  // @ViewChild('menu') menu!: ElementRef
  
  // ngAfterViewInit(): void {
  //   var menuR = this.menuResp.nativeElement.innerText;
  //   var menuN = this.menu.nativeElement.innerText;
    
  //   console.log(menuR);
  //   console.log(menuN);
  // }
}

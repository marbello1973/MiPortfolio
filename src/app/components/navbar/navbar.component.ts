import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { routes} from '../../app.routes'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent   {

  isMenuOpen = false;

  public menuRoutes = routes.map( route => route)
    .filter( (route) =>  !route.path?.includes('**'))   

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
  
}


/*
// @ViewChild('navbar') navbar!: ElementRef;
  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(e: MouseEvent) {
    
  // }

  
  // public mouseOpen($event: Event): void {
  //   const src = this.navBar.nativeElement.scrollToIndex(0);
  //   console.log(src);
  // }


  

  // @ViewChild('span1') span1!: ElementRef;

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
*/
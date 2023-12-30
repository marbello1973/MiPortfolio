import { Component } from '@angular/core';
import {CardskillComponent} from '../../components/cardskill/cardskill.component';
import { ViewportScroller } from '@angular/common';
import { ProjectComponent } from '../project/project.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardskillComponent, ProjectComponent, ContactComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // constructor(private viewportScroller: ViewportScroller){}

  // scrollSection(sectionId: string){
  //   this.viewportScroller.scrollToAnchor(sectionId);
  // }

}

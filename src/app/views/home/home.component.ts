import { Component } from '@angular/core';
import {CardskillComponent} from '../../components/cardskill/cardskill.component';
import { ProjectComponent } from '../project/project.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { CardsvgComponent } from '../../components/cardsvg/cardsvg.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    CardskillComponent, 
    ProjectComponent, 
    ContactComponent, 
    AboutComponent, 
    CardsvgComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // constructor(private viewportScroller: ViewportScroller){}

  // scrollSection(sectionId: string){
  //   this.viewportScroller.scrollToAnchor(sectionId);
  // }

}

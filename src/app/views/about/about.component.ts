import { Component } from '@angular/core';
// import { CardjavascriptComponent } from '../../components/cardabout/cardjavascript/cardjavascript.component';
// import { CardtypescriptComponent } from '../../components/cardabout/cardtypescript/cardtypescript.component';
// import { CardjavaComponent } from '../../components/cardabout/cardjava/cardjava.component';
// import { CardspringbootComponent } from '../../components/cardabout/cardspringboot/cardspringboot.component';  

import { CardAboutComponent } from '../../components/cardabout/exportcomponent';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CardAboutComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}

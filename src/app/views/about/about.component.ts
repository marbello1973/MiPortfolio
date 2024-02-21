import { Component } from '@angular/core';
import { CardjavascriptComponent } from '../../components/cardabout/cardjavascript/cardjavascript.component';
import { CardtypescriptComponent } from '../../components/cardabout/cardtypescript/cardtypescript.component';
import { CardjavaComponent } from '../../components/cardabout/cardjava/cardjava.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardjavascriptComponent, CardtypescriptComponent, CardjavaComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}

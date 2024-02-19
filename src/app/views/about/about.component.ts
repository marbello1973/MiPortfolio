import { Component } from '@angular/core';
import { CardjavascriptComponent } from '../../components/cardabout/cardjavascript/cardjavascript.component';



@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardjavascriptComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}

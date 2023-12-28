import { Component } from '@angular/core';
import {CardskillComponent} from '../../components/cardskill/cardskill.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardskillComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cardskill',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cardskill.component.html',
  styleUrl: './cardskill.component.css'
})
export class CardskillComponent {
  linkedin = 'https://www.linkedin.com/in/david-marbello';
  github = 'https://github.com/marbello1973'

  redirectToLinkedin() {
    const url = this.linkedin;
    window.open(url, '_blank');
  }

  redirectToGithub() {
    const url = this.github;
    window.open(url, '_blank');
  }

}

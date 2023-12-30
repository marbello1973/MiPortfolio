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
  html: string = 'https://mi-curriculum.vercel.app/'
  email: string = 'david.marbello@gmail.com'
  redirectToEmailenv = 'https://mail.google.com/mail/u/0/?hl=es#inbox?compose=new'

  redirectToLinkedin() {
    const url = this.linkedin;
    window.open(url, '_blank');
  }

  redirectToGithub() {
    const url = this.github;
    window.open(url, '_blank');
  }

  redirectToHtml(){
    const url = this.html;
    window.open(url, '_blank');
  }

  redirectToEmail(){
    const url = this.redirectToEmailenv;
    window.open(url, '_blank');
  }





}

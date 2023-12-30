import { Component } from '@angular/core';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  public age: string = '+50 años, '
  public perfil: string = 'Mi perfil se ajusta alguna vacante'
  public perfil_lab: string = 'Desarrollador web y programdor'
  public skills: string  = 'java - spring boot, typescrip - angular entre otras'


}

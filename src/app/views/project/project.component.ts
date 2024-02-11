import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  projectDataService: {
    id: number, 
    name: string, 
    imagen: string, 
    url: string, 
    title: string, 
    subtitle:{[key:string]: string}[],  
    description: string, 
    tecnologies: string[]
  }[] = this.projectService.getDataProject();
  
  public currentProject: number = 0;  

  constructor(private projectService: DataService) {
    this.projectDataService = this.projectService.getDataProject();  
    console.log(this.projectDataService[0].name);      
  } 

  public algorithm: string = 'Algoritmos'
  public resource: string = 'Recursos'
  public stream: string = 'Streaming'
  public quiz: string = 'Cuestionarios' 


  public algorithms: string[] = this.projectDataService.flatMap((project) => project.subtitle.map((item) => item['algoritmos'] ? item['algoritmos'] : '')).filter((item) => item !== '')
  public resources: string[] = this.projectDataService.flatMap((project) => project.subtitle.map((item) => item['recursos'] ? item['recursos'] : '')).filter((item) => item !== '')
  public streaming: string[] = this.projectDataService.flatMap((project) => project.subtitle.map((item) => item['streaming'] ? item['streaming'] : '')).filter((item) => item !== '')
  public cuestionarios: string[] = this.projectDataService.flatMap((project) => project.subtitle.map((item) => item['cuestionarios'] ? item['cuestionarios'] : '')).filter((item) => item !== '')


}



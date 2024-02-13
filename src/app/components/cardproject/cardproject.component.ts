import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-cardproject',
  standalone: true,
  imports: [],
  templateUrl: './cardproject.component.html',
  styleUrl: './cardproject.component.css'
})
export class CardprojectComponent {

  @Output() gym: string = 'gym'
  @Output() rita: string = 'rita' 
  @Output() country: string = 'country'
  @Output() rick: string = 'rick'
  @Output() encript: string = 'encript'
  @Output() gastos: string = 'gastos'
  @Output() container: string = 'container'  

  public onMouseOverGym($event: MouseEvent) { 
    const gym = this.elemento.nativeElement.querySelector('#gym');    
    const container = this.elemento.nativeElement.querySelector('.container'); 
    container.style.transition = 'all 10s ease';
    
    if (gym) {
      container.style.background = 'rgb(55, 1, 251)';
      container.style.background += 'radial-gradient(circle, rgba(202, 1, 251, 1) 0%, rgba(27, 15, 71, 1) 50%, rgba(27, 15, 71, 1) 100%)';
    }        
  }

  public onMouseOverRita($event: MouseEvent){
    const container = this.elemento.nativeElement.querySelector('.container');
    const rita = this.elemento.nativeElement.querySelector('#rita');
    if (rita) {
      container.style.background = 'rgb(252, 252, 252)';
      container.style.background += 'radial-gradient(circle, rgba(252, 252, 252, 1) 0%, rgba(27, 15, 71, 1) 50%, rgba(27, 15, 71, 1) 100%)';
      console.log(container.style.background);
    }
  }

  public onMouseOverEncript($event: MouseEvent){
    const container = this.elemento.nativeElement.querySelector('.container');
    const encript = this.elemento.nativeElement.querySelector('#encript');
    if (encript) {
      container.style.background = 'rgb(0,190,250)';
      container.style.background += 'radial-gradient(circle, rgba(0,190,250,1) 0%, rgba(27,15,71,1) 50%, rgba(27,15,71,1) 100%)';
    }

  }

  public onMouseOverGastos($event: MouseEvent){
    const container = this.elemento.nativeElement.querySelector('.container');
    const gastos = this.elemento.nativeElement.querySelector('#gastos');
    if (gastos) {
      container.style.background = 'rgb(26,250,0)';
      container.style.background += 'radial-gradient(circle, rgba(26,250,0,1) 0%, rgba(27,15,71,1) 50%, rgba(27,15,71,1) 100%)';
    }
  }



  
  //rgb(55,1,251)
  //radial-gradient(circle, rgba(55,1,251,1) 0%, rgba(15,19,71,1) 50%, rgba(27,15,71,1) 100%)
  //radial-gradient(circle, rgba(202,1,251,1) 0%, rgba(15,25,71,1) 50%, rgba(27,15,71,1) 100%)
  //radial-gradient(circle, rgba(202,1,251,1) 0%, rgba(27,15,71,1) 50%, rgba(27,15,71,1) 100%)

  public onMouseOut($event: MouseEvent) { 
    const gym = this.elemento.nativeElement.querySelector('#gym')
    const rita = this.elemento.nativeElement.querySelector('#rita')
    const container = this.elemento.nativeElement.querySelector('.container');
    if (gym) {
      container.style.background = ''; // Restaurar el color de fondo predeterminado      
    } 
  }

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

  constructor(private projectService: DataService, private elemento: ElementRef) {
    this.projectDataService = this.projectService.getDataProject(); 
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

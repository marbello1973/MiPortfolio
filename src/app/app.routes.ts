import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ProjectComponent } from './views/project/project.component';
import { ContactComponent } from './views/contact/contact.component';
import { ApiComponent } from './views/api/api.component';

export const routes: Routes = [    
    {path: 'inicio', component: HomeComponent },
    {path: 'sobre mi', component: AboutComponent}, 
    {path: 'proyectos', component: ProjectComponent},
    {path: 'contacto', component: ContactComponent },   
    {path: 'api', component: ApiComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}  

];

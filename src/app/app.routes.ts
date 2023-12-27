import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ProjectComponent } from './views/project/project.component';
import { ContactComponent } from './views/contact/contact.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

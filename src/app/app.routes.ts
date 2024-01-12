import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    // default route -> redirects to home
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
    
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

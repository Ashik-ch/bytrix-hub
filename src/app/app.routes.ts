import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) },
  { path: 'services', loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent) },
  { path: 'portfolio', loadComponent: () => import('./components/portfolio/portfolio.component').then(m => m.PortfolioComponent) },
  { path: 'blog', loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent) },
  { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'tasks', loadComponent: () => import('./components/task-manager/task-manager.component').then(m => m.TaskManagerComponent) },
  { path: '**', redirectTo: '' }
];

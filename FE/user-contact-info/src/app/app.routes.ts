import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { UserPageComponent } from './components/user-page/user-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UserPageComponent
  },
  {
    path: '**',
    redirectTo: 'users'
  }
];

export const appRouting = [provideRouter(routes)];

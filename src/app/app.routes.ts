import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'; 

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/tabs/home/home.page').then(m => m.HomePage),
    canActivate: [AuthGuard] // ✅ Protección activada
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/settings/profile/profile.page').then(m => m.ProfilePage),
    canActivate: [AuthGuard] // ✅ Protección activada
  },
];

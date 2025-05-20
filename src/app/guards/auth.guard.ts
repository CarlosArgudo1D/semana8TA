import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private navCtrl: NavController
  ) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    
    if (!token) {
      this.navCtrl.navigateRoot('/auth');
      return false;
    }
    
    return true;
  }
}
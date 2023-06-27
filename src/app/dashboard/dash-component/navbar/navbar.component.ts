import { Component } from '@angular/core';
import { DashService } from '../../dash.service';
import { AuthService } from '../../../login/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public dashService: DashService, public authService:  AuthService, private router: Router) { }

  public toggleMenu() {
    this.dashService.toggleMenu();
  }

  logout(){
    this.authService.logout();
  }

  home(){
    this.router.navigate(['/dash/temp']);
  }

  data(){
    this.router.navigate(['/dash/data']);
  }

  notifications(){

  }

  settings(){

  }

  profile(){
    this.router.navigate(['/dash/profile']);
  }
  
  /*public notifications: string[] = [
    'Notification 1',
    'Notification 2',
    'Notification 3'
  ];*/
}

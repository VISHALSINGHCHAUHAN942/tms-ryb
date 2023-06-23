import { Component } from '@angular/core';
import { DashService } from '../../dash.service';
import { AuthService } from '../../../login/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public dashService: DashService, public authService:  AuthService) { }

  public toggleMenu() {
    this.dashService.toggleMenu();
  }

  logout(){
    this.authService.logout();
  }

  
  /*public notifications: string[] = [
    'Notification 1',
    'Notification 2',
    'Notification 3'
  ];*/
}

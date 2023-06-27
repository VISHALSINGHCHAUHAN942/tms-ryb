import { Component } from '@angular/core';
import{ SaService } from '../../sa.service';
import { AuthService } from '../../../login/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sa-navbar',
  templateUrl: './sa-navbar.component.html',
  styleUrls: ['./sa-navbar.component.css']
})
export class SANavbarComponent {

  constructor(public saService: SaService, public authService:  AuthService, private router: Router) { }

  public toggleMenu() {
    this.saService.toggleMenu();
  }
  logout(){
    this.authService.logout();
  }
  home(){
    this.router.navigate(['/sa/home']);
  }
  users(){
    this.router.navigate(['/sa/users']);
  }
  devices(){
    this.router.navigate(['sa/devices']);
  }
  notifications(){
    this.router.navigate(['sa/companies']);
  }
}

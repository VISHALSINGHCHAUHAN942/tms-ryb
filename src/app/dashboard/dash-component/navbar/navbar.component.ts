import { Component } from '@angular/core';
import{ DashService } from '../../dash.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public dashService: DashService) { }

  public toggleMenu() {
    this.dashService.toggleMenu();
  }
}

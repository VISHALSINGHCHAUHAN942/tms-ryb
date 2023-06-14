import { Component } from '@angular/core';
import{ SaService } from '../../sa.service';

@Component({
  selector: 'app-sa-navbar',
  templateUrl: './sa-navbar.component.html',
  styleUrls: ['./sa-navbar.component.css']
})
export class SANavbarComponent {
  constructor(public saService: SaService) { }

  public toggleMenu() {
    this.saService.toggleMenu();
  }
}

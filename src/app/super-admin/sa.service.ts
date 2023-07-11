import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaService {
  public showMenu = false;
  
  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

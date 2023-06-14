import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashService {
  public showMenu = false;
  
  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

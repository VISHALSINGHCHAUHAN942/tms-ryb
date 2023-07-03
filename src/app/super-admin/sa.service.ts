import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaService {
  public showMenu = false;
  public isSidebarOpen = false;
  
  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  public toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}

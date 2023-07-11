import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DestopUserManagerComponent } from './destop-user-manager/destop-user-manager.component';
import { MobileUserManagerComponent } from './mobile-user-manager/mobile-user-manager.component';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent {

  constructor(private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog) { }

  isMobile:boolean = false;
  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.XSmall]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  
}

import {Component} from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
   constructor(private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog) { }
  isMobile:boolean = false;
  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.XSmall]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}

import { Component} from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
 
})

export class CompanyComponent {
  constructor(private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog) { }
  isMobile:boolean = false;
  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.XSmall]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
}
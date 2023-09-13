import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SuperAdminService } from '../../super-admin.service';

// userId: number;
// userName: string;
// Details: string;
// companyName:string;
// Role:string;
// Email:string;
// isSelected?: boolean;

export interface PeriodicElement{
  UserId:any;
  Username:any;
  CompanyName:any;
  Designation:any;
  PersonalEmail:any;
  }
  
  const Data: PeriodicElement[] = [];
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{

  currentTime: Date = new Date();
  displayedColumns: string[] = ['UserId','Username','CompanyName','Designation','PersonalEmail'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private service :SuperAdminService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.service.getUserDetails().then(data => {
      this.dataSource.data = data.userDetails;
      this.dataSource.paginator = this.paginator;
      console.log(data);
      // currentTime: Date = new Date();
      setInterval(() => {
        this.currentTime = new Date();
      }, 1000);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 
}
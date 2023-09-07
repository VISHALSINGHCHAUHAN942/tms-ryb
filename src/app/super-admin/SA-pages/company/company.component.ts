import {Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  userId: number;
  userName: string;
  companyName: string;
  Location: string;
  totalUsers: number;
  totalActiveUsers: number;
  totalInactiveUsers:number;
  subscriptionStartDate:string;
  subscriptionEndDate:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { userId: 2256, userName: 'Snehal', companyName: 'senselive', Location: 'Nagpur', totalUsers: 100, totalActiveUsers: 50,
  totalInactiveUsers:50, subscriptionStartDate: '20-08-23', subscriptionEndDate:'30-08-23' },
  { userId: 2547, userName: 'Vishal', companyName: 'senselive', Location: 'Nagpur', totalUsers: 70, totalActiveUsers: 30,
  totalInactiveUsers:40, subscriptionStartDate: '20-08-23', subscriptionEndDate:'30-08-23' },
  { userId: 3784, userName: 'Krishna', companyName: 'senselive', Location: 'Nagpur', totalUsers: 80, totalActiveUsers: 40,
  totalInactiveUsers:40, subscriptionStartDate: '20-08-23', subscriptionEndDate:'30-08-23' },
  { userId: 4896, userName: 'Virat', companyName: 'ghrce', Location: 'Nagpur', totalUsers: 90, totalActiveUsers: 50,
  totalInactiveUsers:40, subscriptionStartDate: '20-08-23', subscriptionEndDate:'30-08-23' },
  { userId: 2256, userName: 'Snehal', companyName: 'google', Location: 'Nagpur', totalUsers: 100, totalActiveUsers: 50,
  totalInactiveUsers:50, subscriptionStartDate: '20-08-23', subscriptionEndDate:'30-08-23' },
  { userId: 2547, userName: 'Vishal', companyName: 'apple', Location: 'Nagpur', totalUsers: 70, totalActiveUsers: 30,
  totalInactiveUsers:40, subscriptionStartDate: '20-08-23', subscriptionEndDate:'30-08-23' },
  { userId: 3784, userName: 'Krishna', companyName: 'microsoft', Location: 'Nagpur', totalUsers: 80, totalActiveUsers: 40,
  totalInactiveUsers:40, subscriptionStartDate: '20-08-23', subscriptionEndDate:'30-08-23' },
  { userId: 4896, userName: 'Virat', companyName: '-------', Location: 'Nagpur', totalUsers: 90, totalActiveUsers: 50,
  totalInactiveUsers:40, subscriptionStartDate: '20-08-23', subscriptionEndDate:'30-08-23' },
  { userId: 2256, userName: 'Snehal', companyName: '-------', Location: 'Nagpur', totalUsers: 100, totalActiveUsers: 50,
  totalInactiveUsers:50, subscriptionStartDate: '20-08-23', subscriptionEndDate:'30-08-23' },
  { userId: 2547, userName: 'Vishal', companyName: '-------', Location: 'Nagpur', totalUsers: 70, totalActiveUsers: 30,
  totalInactiveUsers:40, subscriptionStartDate: '20-08-23', subscriptionEndDate:'30-08-23' },
  { userId: 3784, userName: 'Krishna', companyName: '-------', Location: 'Nagpur', totalUsers: 80, totalActiveUsers: 40,
  totalInactiveUsers:40, subscriptionStartDate: '20-08-23', subscriptionEndDate:'30-08-23' },
  { userId: 4896, userName: 'Virat', companyName: '-------', Location: 'Nagpur', totalUsers: 90, totalActiveUsers: 50,
  totalInactiveUsers:40, subscriptionStartDate: '20-08-23', subscriptionEndDate:'30-08-23' },
  { userId: 2256, userName: 'Snehal', companyName: '-------', Location: 'Nagpur', totalUsers: 100, totalActiveUsers: 50,
  totalInactiveUsers:50, subscriptionStartDate: '20-08-23', subscriptionEndDate:'30-08-23' },
  { userId: 2547, userName: 'Vishal', companyName: '-------', Location: 'Nagpur', totalUsers: 70, totalActiveUsers: 30,
  totalInactiveUsers:40, subscriptionStartDate: '20-08-23', subscriptionEndDate:'30-08-23' },
  { userId: 3784, userName: 'Krishna', companyName: '-------', Location: 'Nagpur', totalUsers: 80, totalActiveUsers: 40,
  totalInactiveUsers:40, subscriptionStartDate: '20-08-23', subscriptionEndDate:'30-08-23' },
  { userId: 4896, userName: 'Virat', companyName: '-------', Location: 'Nagpur', totalUsers: 90, totalActiveUsers: 50,
  totalInactiveUsers:40, subscriptionStartDate: '20-08-23', subscriptionEndDate:'30-08-23' },


];
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],

})

export class CompanyComponent implements OnInit{
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns: string[] = [' userId', 'userName', 'companyName', 'Location', 'totalUsers', 'totalActiveUsers', 
  'totalInactiveUsers','subscriptionStartDate','subscriptionEndDate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

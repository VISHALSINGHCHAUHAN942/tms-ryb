import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  userId: number;
  userName: string;
  Details: string;
  companyName:string;
  Role:string;
  Email:string;
  isSelected?: boolean;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { userId: 2256, userName: 'Snehal', Details: 'XYZ', companyName: '-------', Role: 'Manager', Email: 'user@gmail.com' },
  { userId: 2547, userName: 'Vishal', Details: 'XYZ', companyName: '-------', Role: 'Manager', Email: 'user@gmail.com' },
  { userId: 3784, userName: 'Krishna', Details: 'XYZ', companyName: '-------', Role: 'Manager', Email: 'user@gmail.com' },
  { userId: 4896, userName: 'Virat', Details: 'XYZ', companyName: '-------', Role: 'Manager', Email: 'user@gmail.com' },
  { userId: 5589, userName: 'Rami', Details: 'XYZ', companyName: '-------', Role: 'Manager', Email: 'user@gmail.com' },
  { userId: 2566, userName: 'Aman', Details: 'XYZ', companyName: '-------', Role: 'Manager', Email: 'user@gmail.com' },
  { userId: 7588, userName: 'Vijay', Details: 'XYZ', companyName: '-------', Role: 'Manager', Email: 'user@gmail.com' },
  { userId: 7865, userName: 'Vinita', Details: 'XYZ', companyName: '-------', Role: 'Manager', Email: 'user@gmail.com' },
  { userId: 7896, userName: 'Sagar', Details: 'XYZ', companyName: '-------', Role: 'Manager', Email: 'user@gmail.com' },
  { userId: 2230, userName: 'Shyam', Details: 'XYZ', companyName: '-------', Role: 'Manager', Email: 'user@gmail.com' },
  { userId: 7777, userName: 'Pawan', Details: 'XYZ', companyName: '-------', Role: 'Manager', Email: 'user@gmail.com' },
  { userId: 3786, userName: 'Ashok', Details: 'XYZ', companyName: '-------', Role: 'Manager', Email: 'user@gmail.com' },
  { userId: 8085, userName: 'Pankaj', Details: 'XYZ', companyName: '-------', Role: 'Manager', Email: 'user@gmail.com' },
  { userId: 2101, userName: 'Sonu', Details: 'XYZ', companyName: '-------', Role: 'Manager', Email: 'user@gmail.com' },
  { userId: 9991, userName: 'Monu', Details: 'XYZ', companyName: '-------', Role: 'Manager', Email: 'user@gmail.com' },
  { userId: 1010, userName: 'Golu', Details: 'XYZ', companyName: '-------', Role: 'Manager', Email: 'user@gmail.com' },
];
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  tick = false; 

  displayedColumns: string[] = ['check', ' userId', 'userName', 'Details','companyName','Role', 'Email', 'edit'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }
  bulk(event: any): void {
    this.tick = event.checked;
    this.dataSource.data.forEach((row: PeriodicElement) => {
      row.isSelected = this.tick;
    });
  }
}
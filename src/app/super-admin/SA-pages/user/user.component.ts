import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  displayedColumns4: string[] = [ 'check', ' userId', 'userName', 'Details','companyName','Role', 'Email', 'edit'];
  dataSource4: DeviceData[] = [
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
}

export interface DeviceData {
  userId: number;
  userName: string;
  Details: string;
  companyName:string;
  Role:string;
  Email:string; 

}
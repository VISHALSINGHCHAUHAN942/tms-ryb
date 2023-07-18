import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent {

  constructor(public dialog: MatDialog) { }
  displayedColumns: string[] = ['Name', 'Contact', 'Designation', 'Status'];
  dataSource: YourData[] = [
    { fname: 'Kaushal', lname:'Pohekar', email: 'kaushalpohekar85@gmail.com', contactNo: '9309865924', designation:'SDE', status:'Active' },   
    { fname: 'Kaushal', lname:'Pohekar', email: 'kaushalpohekar85@gmail.com', contactNo: '9309865924', designation:'SDE', status:'Active' },
    { fname: 'Kaushal', lname:'Pohekar', email: 'kaushalpohekar85@gmail.com', contactNo: '9309865924', designation:'SDE', status:'Active' },   
    { fname: 'Kaushal', lname:'Pohekar', email: 'kaushalpohekar85@gmail.com', contactNo: '9309865924', designation:'SDE', status:'Active' },
    { fname: 'Kaushal', lname:'Pohekar', email: 'kaushalpohekar85@gmail.com', contactNo: '9309865924', designation:'SDE', status:'Active' },   
    { fname: 'Kaushal', lname:'Pohekar', email: 'kaushalpohekar85@gmail.com', contactNo: '9309865924', designation:'SDE', status:'Active' },
    { fname: 'Kaushal', lname:'Pohekar', email: 'kaushalpohekar85@gmail.com', contactNo: '9309865924', designation:'SDE', status:'Active' },   
    { fname: 'Kaushal', lname:'Pohekar', email: 'kaushalpohekar85@gmail.com', contactNo: '9309865924', designation:'SDE', status:'Active' },
    { fname: 'Kaushal', lname:'Pohekar', email: 'kaushalpohekar85@gmail.com', contactNo: '9309865924', designation:'SDE', status:'Active' },   
    { fname: 'Kaushal', lname:'Pohekar', email: 'kaushalpohekar85@gmail.com', contactNo: '9309865924', designation:'SDE', status:'Active' },
    { fname: 'Kaushal', lname:'Pohekar', email: 'kaushalpohekar85@gmail.com', contactNo: '9309865924', designation:'SDE', status:'Active' },   
    { fname: 'Kaushal', lname:'Pohekar', email: 'kaushalpohekar85@gmail.com', contactNo: '9309865924', designation:'SDE', status:'Active' },   // Add more data objects as needed
    
  ];
  
}

export interface YourData {
  fname: string;
  lname: string;
  email: string;
  contactNo: string;
  designation: string;
  status: string;
}
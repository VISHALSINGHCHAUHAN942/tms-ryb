
import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

import {MatTableDataSource,} from '@angular/material/table';
import { AddDeviceComponent } from './add-device/add-device.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { SuperAdminService } from '../../super-admin.service';


export interface PeriodicElement{
//   create_time: any;
//   type: any;
//   name:any;
//   company_name:any;
//   company_location:any;
//  label:any;
//   state:any;
//   color:any;
//   device_ip:any;
//   isSelected?: boolean; 
id:any;
deviceuid:any;
ip_address:any;
status:any;
timestamp:any;
}

const Data: PeriodicElement[] = [
];
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],

})
export class DeviceComponent {
  currentTime: Date = new Date();
  displayedColumns: string[] = ['id','deviceuid','ip_address','status','timestamp'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private service :SuperAdminService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.service. getDeviceData().then(data => {
      this.dataSource.data = data.logs;
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
  openDialog() {
        this.dialog.open(AddDeviceComponent);
      }
}

// export class DeviceComponent{

//   showFiller = false;
//   tick:false | undefined;
//   isSelected:false | undefined;
  

  
//   constructor(public dialog: MatDialog) {
//   }

//   openDialog() {
//     this.dialog.open(AddDeviceComponent);
//   }

//   @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

//   displayedColumns: string[] = ['id','deviceuid','ip_address','status','timestamp'];
//   dataSource = new MatTableDataSource(Data);
  
//   ngOnInit(): void {
//     this.dataSource = new MatTableDataSource<PeriodicElement>(Data);
//     this.dataSource.paginator = this.paginator;
//   }
//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//   }


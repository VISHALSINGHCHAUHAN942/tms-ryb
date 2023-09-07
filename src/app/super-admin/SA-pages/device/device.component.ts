
import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

import {MatTableDataSource,} from '@angular/material/table';
import { AddDeviceComponent } from './add-device/add-device.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


export interface PeriodicElement{
  create_time: any;
  type: any;
  name:any;
  company_name:any;
  company_location:any;
 label:any;
  state:any;
  color:any;
  device_ip:any;
  isSelected?: boolean; // 
}

const Data: PeriodicElement[] = [
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',color:'bg-success',name:'Device 1',company_name:'senselive',company_location:'Nagpur',state:'active',device_ip:'kb10028928 ',label:''},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',color:'bg-danger',name:'Device 1',company_name:'senselive',company_location:'Nagpur',state:'inactive',device_ip:'kb10028928 ',label:''},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',color:'bg-danger',name:'Device 1',company_name:'senselive',company_location:'Nagpur',state:'inactive',device_ip:'kb10028928 ',label:''},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',color:'bg-danger',name:'Device 1',company_name:'senselive',company_location:'Nagpur',state:'inactive',device_ip:'kb10028928 ',label:''},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',color:'bg-success',name:'Device 1',company_name:'senselive',company_location:'Nagpur',state:'active',device_ip:'kb10028928 ',label:''},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',color:'bg-success',name:'Device 1',company_name:'senselive',company_location:'Nagpur',state:'active',device_ip:'kb10028928 ',label:''},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',color:'bg-danger',name:'Device 1',company_name:'senselive',company_location:'Nagpur',state:'inactive',device_ip:'kb10028928 ',label:''},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',color:'bg-danger',name:'Device 1',company_name:'senselive',company_location:'Nagpur',state:'inactive',device_ip:'kb10028928 ',label:''},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',color:'bg-danger',name:'Device 1',company_name:'senselive',company_location:'Nagpur',state:'inactive',device_ip:'kb10028928 ',label:''},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',color:'bg-success',name:'Device 1',company_name:'senselive',company_location:'Nagpur',state:'active',device_ip:'kb10028928 ',label:''},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',color:'bg-success',name:'Device 1',company_name:'senselive',company_location:'Nagpur',state:'active',device_ip:'kb10028928 ',label:''},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',color:'bg-danger',name:'Device 1',company_name:'senselive',company_location:'Nagpur',state:'inactive',device_ip:'kb10028928 ',label:''},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',color:'bg-danger',name:'Device 1',company_name:'senselive',company_location:'Nagpur',state:'inactive',device_ip:'kb10028928 ',label:''},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',color:'bg-danger',name:'Device 1',company_name:'senselive',company_location:'Nagpur',state:'inactive',device_ip:'kb10028928 ',label:''},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',color:'bg-success',name:'Device 1',company_name:'senselive',company_location:'Nagpur',state:'active',device_ip:'kb10028928 ',label:''},
];
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],

})

export class DeviceComponent{

  showFiller = false;
  tick:false | undefined;
  isSelected:false | undefined;
  

  
  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(AddDeviceComponent);
  }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns: string[] = ['check','name','device_ip','company_name','company_location','label','state','type','actions'];
  dataSource = new MatTableDataSource(Data);
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(Data);
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
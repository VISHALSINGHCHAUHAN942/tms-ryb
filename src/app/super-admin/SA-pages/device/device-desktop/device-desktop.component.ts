import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DashDataService } from '../../../../dashboard/dash-data-service/dash-data.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditDeviceComponent } from 'src/app/dashboard/dash-component/edit-device/edit-device.component';
import { TriggerDeviceComponent } from 'src/app/dashboard/dash-component/trigger-device/trigger-device.component';
import { DeleteDeviceComponent } from '../delete-device/delete-device.component';
import { AddDevicesComponent } from '../add-devices/add-devices.component';
import { AddMultipleDevicesComponent } from '../add-multiple-devices/add-multiple-devices.component';


@Component({
  selector: 'app-device-desktop',
  templateUrl: './device-desktop.component.html',
  styleUrls: ['./device-desktop.component.css']
})
export class DeviceDesktopComponent implements AfterViewInit {
  constructor(private deviceService: DashDataService,public dialog: MatDialog) { }

  updateDeviceData() {
    const deviceUID = 'your-device-uid';
    const deviceData = {
      name: 'New Device Name',
      description: 'Updated device description',
    };

    this.deviceService.editDevice(deviceUID, deviceData).subscribe(
      response => {
        console.log('Device data updated successfully:', response);
      },
      error => {
        console.error('Error updating device data:', error);
      }
    );
  }

[x: string]: any;
  displayedColumns: string[] = ['check','dname',  'Cname', 'location', 'status','modification','edit'];
  dataSource = new MatTableDataSource<devices>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  openEditDeviceDialog(device: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px'; // Set the width of the dialog
    dialogConfig.height = 'auto'; // Let the height adjust automatically
    dialogConfig.maxWidth = '90vw'; // Set the maximum width as a percentage of the viewport width

    dialogConfig.data = { device };

    const dialogRef = this.dialog.open(EditDeviceComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(updatedDevice => {
      // Handle the updated device data here
      console.log(updatedDevice);
    });
  }
  openTriggerDeviceDialog(device: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px'; // Set the width of the dialog
    dialogConfig.height = 'auto'; // Let the height adjust automatically
    dialogConfig.maxWidth = '90vw'; // Set the maximum width as a percentage of the viewport width

    dialogConfig.data = { device };

    const dialogRef = this.dialog.open(TriggerDeviceComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(updatedDevice => {
      // Handle the updated device data here
      console.log(updatedDevice);
    });
  }
  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteDeviceComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openAddDeviceDialog() {
    const dialogRef = this.dialog.open(AddDevicesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openAddMultiDeviceDialog() {
    const dialogRef = this.dialog.open(AddMultipleDevicesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
// tms-front/src/app/super-admin/SA-pages/device
export interface devices {
  uniqueid : string;
  dname: string;
  Cname: string;
  location: string;
  status: string;
  modification : string;
  
}

const ELEMENT_DATA: devices[] = [
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On' ,modification : '21-08-23'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On'  ,modification : '21-08-23'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname : 'ABC  ', location: 'Nagpur', status: 'On' ,modification : '21-08-23'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On' ,modification : '21-08-23'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On' ,modification : '21-08-23'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname:  'ABC  ', location: 'Nagpur', status: 'On' ,modification : '21-08-23'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On' ,modification : '21-08-23'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On',modification : '21-08-23'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On' ,modification : '21-08-23'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On' ,modification : '21-08-23'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On' , modification :'21-08-23'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname:'ABC  ', location: 'Nagpur', status: 'i' , modification :'21-08-23'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC', location: 'Nagpur', status: 'i' , modification :'21-08-23'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC', location: 'Nagpur', status: 'i' , modification :'21-08-23'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC', location: 'Nagpur', status: 'i' , modification :'21-08-23'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC', location: 'Nagpur', status: 'i' , modification :'21-08-23'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC', location: '12:00', status: 'i' , modification :'yes'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC', location: '12:00', status: 'i' , modification :'yes'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC', location: '12:00', status: 'i' , modification :'yes'},
  { dname: 'xyz', uniqueid: 'VDYU673572', Cname: 'ABC', location: '12:00', status: 'i' , modification :'yes'},
];


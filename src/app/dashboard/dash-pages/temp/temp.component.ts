import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditDeviceComponent } from '../../dash-component/edit-device/edit-device.component';
import { TriggerDeviceComponent } from '../../dash-component/trigger-device/trigger-device.component';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {
  devices: any[] = [
    { name: 'Device 1', time: '10:00 AM', temperature: '25', humidity: '50' },
    { name: 'Device 2', time: '11:00 AM', temperature: '26', humidity: '45' },
    { name: 'Device 3', time: '12:00 PM', temperature: '27', humidity: '48' },
    { name: 'Device 4', time: '10:00 AM', temperature: '25', humidity: '50' },
    { name: 'Device 5', time: '11:00 AM', temperature: '26', humidity: '45' },
    { name: 'Device 6', time: '12:00 PM', temperature: '27', humidity: '48' },
    { name: 'Device 7', time: '10:00 AM', temperature: '25', humidity: '50' },
    { name: 'Device 8', time: '11:00 AM', temperature: '26', humidity: '45' },
    { name: 'Device 9', time: '12:00 PM', temperature: '27', humidity: '48' },
    { name: 'Device 10', time: '10:00 AM', temperature: '23', humidity: '50' },
    { name: 'Device 11', time: '11:00 AM', temperature: '22', humidity: '45' },
    { name: 'Device 12', time: '12:00 PM', temperature: '21', humidity: '48' },
    // ... add more devices here
  ];

  constructor(public dialog: MatDialog) {}

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
}

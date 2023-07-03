import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditDeviceComponent } from '../../dash-component/edit-device/edit-device.component';
import { TriggerDeviceComponent } from '../../dash-component/trigger-device/trigger-device.component';
import { DashDataService } from '../../dash-data-service/dash-data.service';
import { AuthService } from '../../../login/auth/auth.service';
import { Subscription } from 'rxjs';
import { MqttService, IMqttMessage } from 'ngx-mqtt';


@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit, OnDestroy {

  userDevices: any[] = [];
  CompanyEmail!: string | null; 


  constructor(public dialog: MatDialog, private DashDataService: DashDataService, private authService: AuthService, private mqttService: MqttService) {}

  ngOnInit() {
    this.getUserDevices();
  }

  ngOnDestroy() {
  }

  getUserDevices() {
    this.CompanyEmail = this.authService.getCompanyEmail();
    console.log(this.CompanyEmail);
    if (this.CompanyEmail) {
      this.DashDataService.userDevices(this.CompanyEmail).subscribe(
        (devices: any) => {
          this.userDevices = devices.devices;
        },
        (error) => {
          console.log('error While fetching User Devices!');
        }
      );
    } 
  }

  openEditDeviceDialog(device: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px'; // Set the width of the dialog
    dialogConfig.height = 'auto'; // Let the height adjust automatically
    dialogConfig.maxWidth = '90vw'; // Set the maximum width as a percentage of the viewport width

    dialogConfig.data = { device };

    const dialogRef = this.dialog.open(EditDeviceComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(updatedDevice => {
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

    });
  }
}

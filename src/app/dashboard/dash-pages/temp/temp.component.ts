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
  deviceData: any[] = [];
  mqttSubscriptions: Subscription[] = [];
  CompanyEmail!: string | null;

  constructor(
    public dialog: MatDialog,
    private DashDataService: DashDataService,
    private authService: AuthService,
    private mqttService: MqttService
  ) {}

  ngOnInit() {
    this.getUserDevices();
  }

  ngOnDestroy() {
    this.unsubscribeTopics();
  }

  getUserDevices() {
    this.CompanyEmail = this.authService.getCompanyEmail();
    console.log(this.CompanyEmail);
    if (this.CompanyEmail) {
      this.DashDataService.userDevices(this.CompanyEmail).subscribe(
        (devices: any) => {
          this.userDevices = devices.devices;
          this.subscribeTopics();
        },
        (error) => {
          console.log('Error while fetching User Devices!');
        }
      );
    }
  }

  subscribeTopics() {
    this.unsubscribeTopics(); // Unsubscribe from existing topics

    this.userDevices.forEach(device => {
      const topic = `sense/live/tms/${device.DeviceUID}`;
      const subscription = this.mqttService.observeRetained(topic).subscribe((message: IMqttMessage) => {
        const payload = message.payload.toString();
        const data = JSON.parse(payload);

        // Update deviceData array with the received data
        const deviceDataIndex = this.deviceData.findIndex(d => d.deviceUID === device.DeviceUID);
        if (deviceDataIndex !== -1) {
          this.deviceData[deviceDataIndex] = {
            deviceUID: device.DeviceUID,
            timestamp: data.timestamp,
            temperature: data.temperature,
            humidity: data.humidity
          };
        } else {
          this.deviceData.push({
            deviceUID: device.DeviceUID,
            timestamp: data.timestamp,
            temperature: data.temperature,
            humidity: data.humidity
          });
        }
      });

      this.mqttSubscriptions.push(subscription);
    });
  }

  unsubscribeTopics() {
    this.mqttSubscriptions.forEach(subscription => subscription.unsubscribe());
    this.mqttSubscriptions = [];
  }

  openEditDeviceDialog(device: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = 'auto';
    dialogConfig.maxWidth = '90vw';
    dialogConfig.data = { device };

    const dialogRef = this.dialog.open(EditDeviceComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(updatedDevice => {
      // Handle the updated device if needed
    });
  }

  openTriggerDeviceDialog(device: any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = 'auto';
    dialogConfig.maxWidth = '90vw';
    dialogConfig.data = { device };

    const dialogRef = this.dialog.open(TriggerDeviceComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(updatedDevice => {
      // Handle the triggered device if needed
    });
  }
}

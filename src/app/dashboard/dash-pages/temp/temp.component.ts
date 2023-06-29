import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditDeviceComponent } from '../../dash-component/edit-device/edit-device.component';
import { TriggerDeviceComponent } from '../../dash-component/trigger-device/trigger-device.component';
import { DashDataService } from '../../dash-data-service/dash-data.service';
import { AuthService } from '../../../login/auth/auth.service';
/*import { MqttService }from '../../../services/mqtt.service';*/
import { Subscription } from 'rxjs';
import { MqttService, IMqttMessage } from 'ngx-mqtt';


@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit, OnDestroy {
  /*devices: any[] = [
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
  ];*/

  userDevices: any[] = [];
  CompanyEmail!: string | null; 
  receivedData: any[] = [];


  constructor(public dialog: MatDialog, private DashDataService: DashDataService, private authService: AuthService, private mqttService: MqttService) {
  }

  ngOnInit() {
    this.getUserDevices();
    this.connectToMqttBroker();
  }

  ngOnDestroy() {
    // Disconnect from the MQTT broker when the component is destroyed
    this.mqttService.disconnect();
  }

  connectToMqttBroker() {
    this.mqttService.onConnect
      .subscribe(() => {
        console.log("Connected!...");
      },
      (error: any) => {
        console.error('Failed to connect to MQTT broker:', error);
    });
  }


  getUserDevices() {
    this.CompanyEmail = this.authService.getCompanyEmail();
    console.log(this.CompanyEmail);
    if (this.CompanyEmail) {
      this.DashDataService.userDevices(this.CompanyEmail).subscribe(
        (devices: any) => {
          this.userDevices = devices.devices;
          console.log(this.userDevices);

          // Subscribe to MQTT topics for each device
          this.subscribeToDeviceTopics();
        },
        (error) => {
          console.log('Error while fetching User Devices!');
        }
      );
    } 
  }

  subscribeToDeviceTopics() {
    this.userDevices.forEach((device: any) => {
      const topic = `sense/live/${device.DiviceId}`;

      this.mqttService.observe(topic).subscribe((message: IMqttMessage) => {
        const data = JSON.parse(message.payload.toString());
        const newData = {
          deviceId: device.deviceId,
          timestamp: data.timestamp,
          temperature: data.temp,
          humidity: data.humidity
        };
        this.updateReceivedData(newData);
        // Handle the received data here, e.g., update the device card
        /*console.log('Topic Subscribed:', topic);
        console.log('Received data:', data);*/
      });
    });
  }
  
  updateReceivedData(newData: any) {
    const index = this.receivedData.findIndex(data => data.deviceId === newData.deviceId);

    if (index !== -1) {
      Object.assign(this.receivedData[index], newData);
    } else {
      this.receivedData.push(newData);
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

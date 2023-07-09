import { Component, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { DashDataService } from '../../dash-data-service/dash-data.service';
import { AuthService } from '../../../login/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  CompanyEmail!: string | null;
  selectedDevice!: FormControl;
   selectedDeviceInterval!: FormControl;
  deviceOptions: any[] = [];
  selectedRadioButton: string = 'Last';
  startDate!: Date;
  endDate!: Date;

  @HostListener('window:resize')
  onWindowResize() {
    this.adjustDialogWidth();
  }

  constructor(
    private DashDataService: DashDataService,
    private authService: AuthService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<FilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.adjustDialogWidth();
    this.selectedDevice = new FormControl(this.deviceOptions.length > 0 ? this.deviceOptions[0].DeviceUID : '', [Validators.required]);
    this.selectedDeviceInterval = new FormControl('1hour');
    this.getUserDevices();

    // Set end date as current date
    this.endDate = new Date();

    // Set start date as one day before the current date
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    const currentDate = new Date();
    currentDate.setTime(currentDate.getTime() - oneDay);
    this.startDate = currentDate;
  }


  adjustDialogWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 600) {
      this.dialogRef.updateSize('90%', '');
    } else if (screenWidth <= 960) {
      this.dialogRef.updateSize('70%', '');
    } else {
      this.dialogRef.updateSize('400px', '');
    }
  }

  getUserDevices() {
    this.CompanyEmail = this.authService.getCompanyEmail();
    if (this.CompanyEmail) {
      this.DashDataService.userDevices(this.CompanyEmail).subscribe(
        (devices: any) => {
          this.deviceOptions = devices.devices;
          if (this.deviceOptions.length > 0) {
            this.selectedDevice.setValue(this.deviceOptions[0].DeviceUID);
          }
        },
        (error) => {
          console.log('Error whi le fetching user devices!');
        }
      );
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  /*onSaveClick(): void {
    if (this.selectedRadioButton === 'Last') {
      if(this.selectedDevice.value){
        this.DashDataService.dataLast(this.selectedDevice.value, this.selectedDeviceInterval.value)
        .subscribe(
          (data: any) => {
            this.dialogRef.close({
              data: data
            });
          },
          (error) => {
            console.log('Error while fetching last data!');
          }
        );
        this.DashDataService.dataLastStatus(this.selectedDevice.value, this.selectedDeviceInterval.value)
        .subscribe(
          (dataStatus: any) => {
            this.dialogRef.close({
              data: data
            });
          },
          (error) => {
            console.log('Error while fetching last data!');
          }
        );
      }
      else{
        console.log("No Device has been selected ");
      }
    } else if (this.selectedRadioButton === 'timePeriod') {
      if (this.selectedDevice.value) {
        // Convert startDate and endDate to the desired format
        const formattedStartDate = this.startDate.toISOString().split('T')[0];
        const formattedEndDate = this.endDate.toISOString().split('T')[0];

        this.DashDataService.DataByCustomDate(this.selectedDevice.value, formattedStartDate, formattedEndDate)
          .subscribe(
            (data: any) => {
              this.dialogRef.close({
                data: data
              });
            },
            (error) => {
              console.log('Error while fetching last data!');
            }
          );
          this.DashDataService.DataByCustomDateStatus(this.selectedDevice.value, formattedStartDate, formattedEndDate)
          .subscribe(
            (dataStatus: any) => {
              this.dialogRef.close({
                data: data
              });
            },
            (error) => {
              console.log('Error while fetching last data!');
            }
          );
      }
      else{
        console.log("No Device has been selected ");
      }
    }
  }*/
  onSaveClick(): void {
    if (this.selectedRadioButton === 'Last') {
      if (this.selectedDevice.value) {
        const device = this.selectedDevice.value;
        const interval = this.selectedDeviceInterval.value;

        this.DashDataService.dataLast(device, interval).subscribe(
          (resultData: any) => {
            this.DashDataService.dataLastStatus(device, interval).subscribe(
              (resultDataStatus: any) => {
                const data = resultData;
                const dataStatus = resultDataStatus;
                this.dialogRef.close({ data, dataStatus });
              },
              (error) => {
                console.log('Error while fetching last data status!');
              }
            );
          },
          (error) => {
            console.log('Error while fetching last data!');
          }
        );
      } else {
        console.log('No device has been selected.');
      }
    } else if (this.selectedRadioButton === 'timePeriod') {
      if (this.selectedDevice.value) {
        const device = this.selectedDevice.value;
        const formattedStartDate = this.startDate.toISOString().split('T')[0];
        const formattedEndDate = this.endDate.toISOString().split('T')[0];

        this.DashDataService.DataByCustomDate(device, formattedStartDate, formattedEndDate).subscribe(
          (resultData: any) => {
            this.DashDataService.DataByCustomDateStatus(device, formattedStartDate, formattedEndDate).subscribe(
              (resultDataStatus: any) => {
                const data = resultData;
                const dataStatus = resultDataStatus;
                this.dialogRef.close({ data, dataStatus });
              },
              (error) => {
                console.log('Error while fetching data status by custom date!');
              }
            );
          },
          (error) => {
            console.log('Error while fetching data by custom date!');
          }
        );
      } else {
        console.log('No device has been selected.');
      }
    }
  }


}

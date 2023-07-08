import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FilterComponent } from '../../dash-component/filter/filter.component';
import { DashDataService } from '../../dash-data-service/dash-data.service';
import { AuthService } from '../../../login/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
HighchartsMore(Highcharts);

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private DashDataService: DashDataService,
    private authService: AuthService,
    public snackBar: MatSnackBar
  ) {}
  
  deviceOptions: any[] = [];
  selectedDevice!: string ;
  selectedDeviceInterval: any = '1hour';    
  CompanyEmail!: string | null;
  temperatureData: any[] = [];
  humidityData: any[] = [];
  timestampData: any[] = [];


  ngOnInit() {
    const sessionData = sessionStorage.getItem('data');
    if (sessionData) {
      const jsonData = JSON.parse(sessionData);
      console.log('Using session storage data:', jsonData);
      this.processChartData(jsonData);
    } else {
      this.getUserDevices();
    }
    this.createDonutChart();
    this.createDonutChart2();    
  }

  getUserDevices() {
    this.CompanyEmail = this.authService.getCompanyEmail();
    if (this.CompanyEmail) {
      this.DashDataService.userDevices(this.CompanyEmail).subscribe(
        (devices: any) => {
          this.deviceOptions = devices.devices;
          if (this.deviceOptions.length > 0) {
            this.selectedDevice = this.deviceOptions[0].DeviceUID;
            this.fetchDefaultData();
          }
        },
        (error) => {
          console.log('Error while fetching user devices!');
        }
      );
    }
  }

  createDonutChart() {
    const options: Highcharts.Options = {
      chart: {
        type: 'pie'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false // Disable the credits display
      },
      plotOptions: {
        pie: {
          innerSize: '50%' // Set the inner size to create a donut chart
        }
      },
      series: [{
        type: 'pie', // Specify the series type as 'pie'
        name: 'Data',
        data: [
          { name: 'Category 1', y: 30 },
          { name: 'Category 2', y: 20 },
          { name: 'Category 3', y: 50 }
        ]
      }]
    };

    Highcharts.chart('donutChart', options);
  }

  createDonutChart2() {
    const options: Highcharts.Options = {
      chart: {
        type: 'pie'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false // Disable the credits display
      },
      plotOptions: {
        pie: {
          innerSize: '50%' // Set the inner size to create a donut chart
        }
      },
      series: [{
        type: 'pie', // Specify the series type as 'pie'
        name: 'Data',
        data: [
          { name: 'Category 1', y: 30 },
          { name: 'Category 2', y: 20 },
          { name: 'Category 3', y: 50 }
        ]
      }]
    };

    Highcharts.chart('donutChart2', options);
  }
  
  createChart() {
    Highcharts.chart('curvedLineChart', {
      chart: {
        type: 'spline'
      },
      title: {
        text: ''
      },
      credits: {
            enabled: false // Disable the credits display
          },

      xAxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepetmber', 'October', 'November', 'December'],
      },
      yAxis: {
        title: {
          text: 'Value'
        }
      },
      series: [{
        name: 'Temperature',
        data: this.temperatureData
      }]
    } as Highcharts.Options);
  }

  createChart2() {
    Highcharts.chart('curvedLineChart2', {
      chart: {
        type: 'spline'
      },
      title: {
        text: ''
      },
      credits: {
            enabled: false // Disable the credits display
          },

      xAxis: {
        categories: ['Monday', 'Tuesday', 'Wenesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'],
      },
      yAxis: {
        title: {
          text: 'Value'
        }
      },
      series: [{
        name: 'Humitidy',
        data: this.humidityData
      }]
    } as Highcharts.Options);
  }

  openFilterDailog(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px'; // Set the width of the dialog
    dialogConfig.height = 'auto'; // Let the height adjust automatically
    dialogConfig.maxWidth = '90vw'; // Set the maximum width as a percentage of the viewport width

    const dialogRef = this.dialog.open(FilterComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data) {
        console.log('Data received from filter modal:', result.data);
        sessionStorage.setItem('data', JSON.stringify(result.data));
        this.processChartData(result.data);
      } else {
        const sessionData = sessionStorage.getItem('data');
        if (sessionData) {
          const jsonData = JSON.parse(sessionData);
          console.log('Using session storage data:', jsonData);
          this.processChartData(jsonData);
        } else {
          console.log('No session storage data available');
          this.fetchDefaultData();
        }
      }
    });
  }

  fetchDefaultData() {
    if(this.selectedDevice){
      this.DashDataService.dataLast(this.selectedDevice, this.selectedDeviceInterval).subscribe(
      (data: any) => {
        sessionStorage.setItem('data', JSON.stringify(data));
        this.processChartData(data);
      },
      (error) => {
        console.log('Error while fetching last data!');
      }
    );
    }
    else{
      console.log(" not defined");
    }
  }

   processChartData(response: any) {
    const data = response.data; // Access the 'data' property of the response object
    this.temperatureData = data.map((entry: any) => [new Date(entry.TimeStamp).getTime(), entry.Temperature]);
    this.humidityData = data.map((entry: any) => [new Date(entry.TimeStamp).getTime(), entry.Humidity]);
    this.timestampData = data.map((entry: any) => new Date(entry.TimeStamp).getTime());

    this.createChart();
    this.createChart2();
  }
}

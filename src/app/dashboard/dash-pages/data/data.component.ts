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
    const sessionDataStatus = sessionStorage.getItem('dataStatus');
    if (sessionData && sessionDataStatus) {
      const jsonData = JSON.parse(sessionData);
      const jsonDataStatus = JSON.parse(sessionDataStatus);
      console.log('Using session storage data:', jsonData);
      console.log('Using session storage data fpr Status:', jsonDataStatus);
      this.processChartData(jsonData);
      this.createDonutChart(jsonDataStatus.dataStatus);
    } else {
      this.getUserDevices();
    }
    /*this.createDonutChart();*/
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

  /*createDonutChart(dataStatus: any) {
    const donutChartData = dataStatus.map((entry: any) => {
      const formattedPercentage = parseFloat(entry.percentage.toFixed(2)); // Format to two decimal places
      let color;

      if (entry.status === 'online') {
        color = {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#78f5e6'], // Start color (light green)
            [1, '#43ab72']  // End color (darker green)
          ]
        };
      } else if (entry.status === 'heating') {
        color = {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#f0afad'],  // Start color (light red)
            [1, 'rgba(255, 0, 0, 1)']   // End color (darker red)
          ]
        };
      } else {
        color = {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#E0E0E0'],  // Start color (default light gray)
            [1, '#B1B1B1']   // End color (default darker gray)
          ]
        };
      }

      return {
        name: entry.status,
        y: formattedPercentage,
        color: color
      };
    });

    const options: Highcharts.Options = {
      chart: {
        type: 'pie'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          innerSize: '50%'
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}%</b>'
      },
      series: [{
        type: 'pie',
        name: 'Time',
        data: donutChartData
      }]
    };

    Highcharts.chart('donutChart', options);
  }*/
  createDonutChart(dataStatus: any) {
    const donutChartData = dataStatus.map((entry: any) => {
      const formattedPercentage = parseFloat(entry.percentage.toFixed(2)); // Format to two decimal places
      let color;

      if (entry.status === 'online') {
        color = {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#78f5e6'], // Start color (light green)
            [1, '#43ab72']  // End color (darker green)
          ]
        };
      } else if (entry.status === 'heating') {
        color = {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#f0afad'],  // Start color (light red)
            [1, 'rgba(255, 0, 0, 1)']   // End color (darker red)
          ]
        };
      } else {
        color = {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#E0E0E0'],  // Start color (default light gray)
            [1, '#B1B1B1']   // End color (default darker gray)
          ]
        };
      }
      const time = entry.count >= 180 ? (entry.count / 180).toFixed(2) + ' hrs' : (entry.count / 3).toFixed(2) + ' mins';

      return {
        name: entry.status,
        y: formattedPercentage,
        color: color,
        time: time
      };
    });

    const options: Highcharts.Options = {
      chart: {
        type: 'pie'
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          innerSize: '50%',
          dataLabels: {
            enabled: true,
            distance: -40, // Adjust the distance of labels from the center of the pie
            format: '{point.name}: {point.time}', // Include status and hours in the label
            style: {
              fontWeight: 'bold'
            }
          }
        }
      },
      tooltip: {
        enabled: false // Disable the tooltip
      },
      series: [{
        type: 'pie',
        name: 'Time',
        data: donutChartData
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
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'Temperature'
        }
      },
      series: [{
        name: 'Temperature',
        color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1
          },
          stops: [
            [0, 'rgba(255, 0, 0, 1)'],    // Start color (red)
            [1, 'rgba(255, 255, 0, 0.3)'] // End color (yellow)
          ]
        },
        data: this.temperatureData
      }] as any
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
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'Humidity'
        }
      },
      series: [{
        name: 'Humitidy',
        color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1
          },
          stops: [
            [0, 'rgba(0, 0, 255, 1)'],    // Start color (blue)
            [1, 'rgba(0, 255, 255, 0.3)'] // End color (cyan)
          ]
        },
        data: this.humidityData
      }] as any
    } as Highcharts.Options);
  }

  openFilterDailog(): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px'; // Set the width of the dialog
    dialogConfig.height = 'auto'; // Let the height adjust automatically
    dialogConfig.maxWidth = '90vw'; // Set the maximum width as a percentage of the viewport width

    const dialogRef = this.dialog.open(FilterComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data && result.dataStatus) {
        console.log('Data received from filter modal:', result.data , result.dataStatus);
        sessionStorage.setItem('data', JSON.stringify(result.data));
        sessionStorage.setItem('dataStatus', JSON.stringify(result.dataStatus));
        this.processChartData(result.data);
        this.createDonutChart(result.dataStatus.dataStatus);
      } else {
        const sessionData = sessionStorage.getItem('data');
        const sessionDataStatus = sessionStorage.getItem('dataStatus');
        if (sessionData && sessionDataStatus) {
          const jsonData = JSON.parse(sessionData);
          const jsonDataStatus = JSON.parse(sessionDataStatus);
          console.log('Using session storage data:', jsonData, jsonDataStatus);
          this.processChartData(jsonData);
          this.createDonutChart(jsonDataStatus.dataStatus);
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
        this.DashDataService.dataLastStatus(this.selectedDevice, this.selectedDeviceInterval).subscribe(
          (dataStatus: any) => {
            sessionStorage.setItem('dataStatus', JSON.stringify(dataStatus));
          }
        );
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

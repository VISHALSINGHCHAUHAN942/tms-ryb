import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit{
  temperatureData = [
    { x: new Date(2023, 7, 21), y: 50 },
    { x: new Date(2023, 7, 22), y: 82 },
    { x: new Date(2023, 7, 23), y: 10 },
    { x: new Date(2023, 7, 24), y: 74 },
    { x: new Date(2023, 7, 25), y: 22 },
    { x: new Date(2023, 7, 26), y: 10 },
    { x: new Date(2023, 7, 27), y: 74 },
    { x: new Date(2023, 7, 28), y: 22 },
    { x: new Date(2023, 7, 29), y: 10 },
    { x: new Date(2023, 7, 30), y: 74 },
    { x: new Date(2023, 8, 1), y: 22 },
  ]; 
 ngOnInit(): void {
     this.createChart();
 }
 createChart() {
  Highcharts.chart('curvedLine1', {
      chart: {
          type: 'column',
          plotBorderColor: 'black',
          plotBorderWidth: 1,
          height: 350
      },
      title: {
          text: ''
      },
      credits: {
          enabled: false
      },
      xAxis: {
          title: {
              text: ''
          },
          type: 'datetime', // Use datetime x-axis
          timezoneOffset: 330
      },
      yAxis: {
          title: {
              text: ''
          },
          min: 0,
          max: 100,
          gridLineWidth: 0
      },
      series: [{
          name: 'Device Activity',
          color: 'rgba(173, 129, 235, 0.8)', // Light purple color
          data: this.temperatureData // Data organized by day
      },  
      // {
      //     name: 'Humidity',
      //     color: 'rgba(130, 187, 255, 0.8)', // Light blue color
      //     data: this.humidityData // Data organized by day
      // }
    ] as any
  } as Highcharts.Options);
}

  displayedColumns3: string[] = ['DashboardNumber', 'DashboardName', 'DashboardStatus'];
  dataSource3: DeviceData[] = [
    { DashboardNumber: 1, DashboardName: 'My_Dashboard', DashboardStatus: '6 min ago' },
    { DashboardNumber: 2, DashboardName: 'Thermostats', DashboardStatus: '6 min ago' },
    { DashboardNumber: 3, DashboardName: 'Smart energy monitoring', DashboardStatus: '6 min ago' },
    { DashboardNumber: 4, DashboardName: 'Gateways', DashboardStatus: 'week ago' },
    { DashboardNumber: 5, DashboardName: 'Software', DashboardStatus: 'week ago' },
  ];
  displayedColumns4: string[] = ['Devices', 'Values','dash_Progress'];
  dataSource4: UsageData[] = [
    { Devices: 'Devices', Values: '10/∞' },
    { Devices: 'Devices', Values: '10/∞' },
    { Devices: 'Devices', Values: '10/∞' },
    { Devices: 'Devices', Values: '10/∞' },
    { Devices: 'Devices', Values: '10/∞' },
  ];

}

export interface DeviceData {
  DashboardNumber: number;
  DashboardName: string;
  DashboardStatus: string;
}
export interface UsageData {
  Devices: string;
  Values: string;

}
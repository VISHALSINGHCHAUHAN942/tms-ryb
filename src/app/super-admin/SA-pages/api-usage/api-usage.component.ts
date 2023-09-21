import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SuperAdminService } from '../../super-admin.service';
import { SaService } from '../../sa.service';

@Component({
  selector: 'app-api-usage',
  templateUrl: './api-usage.component.html',
  styleUrls: ['./api-usage.component.css'],
})
export class ApiUsageComponent implements OnInit {
  progressValue = 40;
  bufferValue = 100;
  devicedata: any = {};
  graphdata: any = {};
  temperatureData: any = {};
  displayGraphFull1: boolean = false;
  displayGraphFull2: boolean = false;
  displayGraphFull3: boolean = false;
  displayGraphFull4: boolean = false;

  constructor(
    public saService: SaService,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private service: SuperAdminService
  ) {}

  ngOnInit(): void {
    this.gettotaldevicecount();
    this.saService.isPageLoading(true);
    this.createChart1();
    this.createChart2();
    this.createChart3();
    this.createChart4();
  }

  gettotaldevicecount() {
    this.service.gettransportGraphData().subscribe(
      (devices) => {
        this.graphdata = devices.logs;

        // Map the received data to temperatureData
        this.temperatureData = this.graphdata;
        this.saService.isPageLoading(false);
        console.log(this.temperatureData);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  isFullScreen = false;

  fullScrrenGraph1(){
    this.displayGraphFull1 = !this.displayGraphFull1;
  }

  fullScrrenGraph2(){
    this.displayGraphFull2 = !this.displayGraphFull2;
  }

  fullScrrenGraph3(){
    this.displayGraphFull3 = !this.displayGraphFull3;
  }

  fullScrrenGraph4(){
    this.displayGraphFull4 = !this.displayGraphFull4;
  }

  createChart1() {
    // Sample data
    const jsonData = {
        "logs": [
            {"EntryId":21,"Values":8,"IssueDate":"2023-09-20T12:28:56.000Z"},
            {"EntryId":22,"Values":7,"IssueDate":"2023-09-20T12:30:14.000Z"},
            {"EntryId":23,"Values":6,"IssueDate":"2023-09-20T12:30:16.000Z"},
            {"EntryId":24,"Values":10,"IssueDate":"2023-09-20T12:30:19.000Z"},
            {"EntryId":479,"Values":5,"IssueDate":"2023-09-20T12:57:25.000Z"}
        ]
    };

    // Extract data for the chart
    const chartData = jsonData.logs.map(log => ({
        x: new Date(log.IssueDate).getTime(), // Convert date string to timestamp
        y: log.Values
    }));

    Highcharts.chart('curvedLine1', {
        chart: {
            type: 'column',
            plotBorderColor: 'black',
            plotBorderWidth: 1,
            height: 200
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
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%e %b %Y' // Format for displaying dates on the x-axis
            }
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
            name: 'Temperature',
            color: 'rgba(173, 129, 235, 0.8)',
            data: chartData
        }] as any
    });
}
 
  createChart2() {
    Highcharts.chart('curvedLine2', {
        chart: {
            type: 'column',
            plotBorderColor: 'black',
            plotBorderWidth: 1,
            height: 200
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
            name: 'Temperature',
            color: 'rgba(173, 129, 235, 0.8)', // Light purple color
            data: this.graphdata // Data organized by day
        },
        // {
        //     name: 'Humidity',
        //     color: 'rgba(130, 187, 255, 0.8)', // Light blue color
        //     data: this.humidityData // Data organized by day
        // }
      ] as any
    } as Highcharts.Options);
  }
  createChart3() {
    Highcharts.chart('curvedLine3', {
        chart: {
            type: 'column',
            plotBorderColor: 'black',
            plotBorderWidth: 1,
            height: 200
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
            name: 'Temperature',
            color: 'rgba(173, 129, 235, 0.8)', // Light purple color
            data: this.graphdata // Data organized by day
        },
        // {
        //     name: 'Humidity',
        //     color: 'rgba(130, 187, 255, 0.8)', // Light blue color
        //     data: this.humidityData // Data organized by day
        // }
      ] as any
    } as Highcharts.Options);
  }
  createChart4() {
    Highcharts.chart('curvedLine4', {
        chart: {
            type: 'column',
            plotBorderColor: 'black',
            plotBorderWidth: 1,
            height: 200
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
            name: 'Temperature',
            color: 'rgba(173, 129, 235, 0.8)', // Light purple color
            data: this.graphdata // Data organized by day
        },
        // {
        //     name: 'Humidity',
        //     color: 'rgba(130, 187, 255, 0.8)', // Light blue color
        //     data: this.humidityData // Data organized by day
        // }
      ] as any
    } as Highcharts.Options);
  }
}





  // PressureData = [
  //   { x: new Date(2023, 7, 21), y: 20 },
  //   { x: new Date(2023, 7, 22), y: 82 },
  //   { x: new Date(2023, 7, 23), y: 10 },
  //   { x: new Date(2023, 7, 24), y: 74 },
  //   { x: new Date(2023, 7, 25), y: 22 },
  //   { x: new Date(2023, 7, 26), y: 10 },
  //   { x: new Date(2023, 7, 27), y: 74 },
  //   { x: new Date(2023, 7, 28), y: 22 },
  //   { x: new Date(2023, 7, 29), y: 10 },
  //   { x: new Date(2023, 7, 30), y: 74 },
  //   { x: new Date(2023, 8, 1), y: 22 },
  // ];

  // humidityData = [
  //   { x: new Date(2023, 7, 21), y: 30 },
  //   { x: new Date(2023, 7, 22), y: 92 },
  //   { x: new Date(2023, 7, 23), y: 40 },
  //   { x: new Date(2023, 7, 24), y: 84 },
  //   { x: new Date(2023, 7, 25), y: 32 },
  //   { x: new Date(2023, 7, 26), y: 30 },
  //   { x: new Date(2023, 7, 27), y: 84 },
  //   { x: new Date(2023, 7, 28), y: 12 },
  //   { x: new Date(2023, 7, 29), y: 10 },
  //   { x: new Date(2023, 7, 30), y: 94 },
  //   { x: new Date(2023, 7, 31), y: 94 },
  //   { x: new Date(2023, 8, 1), y: 22 },
  //   { x: new Date(2023, 8, 2), y: 22 },
  //   { x: new Date(2023, 8, 3), y: 22 },
  //   { x: new Date(2023, 8, 4), y: 22 },
  //   { x: new Date(2023, 8, 5), y: 22 },
  //   { x: new Date(2023, 8, 6), y: 22 },
  //   { x: new Date(2023, 8, 7), y: 22 },
  //   { x: new Date(2023, 8, 8), y: 22 },
  // ];
  // Import necessary modules and declare temperatureData array
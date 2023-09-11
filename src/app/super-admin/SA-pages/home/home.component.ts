import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as Highcharts from 'highcharts';

export interface PeriodicElement {
  Sno:any;
  name:any;
  Lastviewed:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Sno:'1',name:'vishal',Lastviewed:'6 min ago' },
  { Sno:'2',name:'vishal',Lastviewed:'6 min ago' },
  { Sno:'3',name:'vishal',Lastviewed:'6 min ago' },
  { Sno:'4',name:'vishal',Lastviewed:'6 min ago' },
  { Sno:'5',name:'vishal',Lastviewed:'6 min ago' },
  { Sno:'6',name:'vishal',Lastviewed:'6 min ago' },
  { Sno:'7',name:'vishal',Lastviewed:'6 min ago' },
  { Sno:'8',name:'vishal',Lastviewed:'6 min ago' },
];
export interface PeriodicElement2 {
  Device:any;
  value:any;
}

const ELEMENT_DATA2: PeriodicElement2[] = [
  { Device:'devices',value:'19/100' },
  { Device:'assets',value:'19/100' },
  { Device:'users',value:'19/100' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns: string[] = ['Sno','name','Lastviewed'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  displayedColumns2: string[] = ['Device','value','dash_Progress'];
  dataSource2 = new MatTableDataSource(ELEMENT_DATA2);
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.createChart();
  }
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
    createChart() {
      Highcharts.chart('curvedLine', {
          chart: {
              type: 'column',
              plotBorderColor: 'black',
              plotBorderWidth: 1,
              height: 320,
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
}




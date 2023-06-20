import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FilterComponent } from '../../dash-component/filter/filter.component';
HighchartsMore(Highcharts);

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  constructor(public dialog: MatDialog) {}


  ngOnInit() {
    this.createDonutChart();
    this.createDonutChart2();    
    this.createChart();
    this.createChart2();

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
        name: 'Data',
        data: [8, 10, 7, 15, 22, 25, 10, 21, 15, 11, 6, 3]
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
        name: 'Data',
        data: [15, 7, 12, 18, 35, 30, 10]
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
      // Handle the updated device data here
      console.log("Filter Modal is Open and closed", result);
    });
  }

}

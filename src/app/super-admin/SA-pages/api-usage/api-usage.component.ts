import { Component, OnInit,Renderer2, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-api-usage',
  templateUrl: './api-usage.component.html',
   styleUrls: ['./api-usage.component.css']
})
export class ApiUsageComponent implements OnInit {
  progressValue = 40;
  bufferValue = 100;
 
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void { 
    this.createChart();
    this.createChart2();
    this.createChart3();
    this.createChart6();

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
  PressureData = [
    { x: new Date(2023, 7, 21), y: 20 },
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

  humidityData = [
    { x: new Date(2023, 7, 21), y: 30 },
    { x: new Date(2023, 7, 22), y: 92 },
    { x: new Date(2023, 7, 23), y: 40 },
    { x: new Date(2023, 7, 24), y: 84 },
    { x: new Date(2023, 7, 25), y: 32 },
    { x: new Date(2023, 7, 26), y: 30 },
    { x: new Date(2023, 7, 27), y: 84 },
    { x: new Date(2023, 7, 28), y: 12 },
    { x: new Date(2023, 7, 29), y: 10 },
    { x: new Date(2023, 7, 30), y: 94 },
    { x: new Date(2023, 7, 31), y: 94 },
    { x: new Date(2023, 8, 1), y: 22 },
    { x: new Date(2023, 8, 2), y: 22 },
    { x: new Date(2023, 8, 3), y: 22 },
    { x: new Date(2023, 8, 4), y: 22 },
    { x: new Date(2023, 8, 5), y: 22 },
    { x: new Date(2023, 8, 6), y: 22 },
    { x: new Date(2023, 8, 7), y: 22 },
    { x: new Date(2023, 8, 8), y: 22 },

  ];
   // Import necessary modules and declare temperatureData array

   createChart() {
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
      series: [
    
      {
          name: 'Pressure',
          color: 'rgba(130, 187, 255, 0.8)', // Light blue color
          data: this.PressureData // Data organized by day
      }] as any
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
      series: [
      
      {
          name: 'Humidity',
          color: 'rgba(130, 187, 255, 0.8)', // Light blue color
          data: this.humidityData // Data organized by day
      }] as any
  } as Highcharts.Options);
}
createChart6() {
  Highcharts.chart('curvedLine6', {
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
      series: [
      
      {
          name: 'Humidity',
          color: 'rgba(130, 187, 255, 0.8)', // Light blue color
          data: this.humidityData // Data organized by day
      }] as any
  } as Highcharts.Options);
}

  createChart4() {
    // Generate dummy data
    const categories = ['device 1', 'device 2', 'device 3'];
    const dataSeries = [
      {
        name: 'heating',
        data: [10, 10, 10],
       
      },
      {
        name: 'offline',
        data: [20, 20, 10]
      },
      {
        name: 'online',
        data: [5, 10, 5]
      }
    ];
     // total devices = online +offlone +heating
     const totalDevicesData = categories.map((_, index) => {
      const totalValue = dataSeries.reduce((sum, series) => sum + series.data[index], 0);
      return totalValue;
  });

  // Add the Totaldevices data series
  dataSeries.push({
      name: 'Total',
      data: totalDevicesData
  });

    Highcharts.chart('curvedLine4', {
      chart: {
        type: 'column',
        plotBorderColor: 'black',
        plotBorderWidth: 1,
        height:240, 

      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: categories
      },
      yAxis: {
        title: {
          text: 'Value'
        },
        min: 0,
        max: 100,
        gridLineWidth: 0
      },
      plotOptions: {
        column: {
          stacking: 'normal' // Enable stacking
        }
      },
      legend: {
        symbolHeight: 12, // Adjust the height of the legend symbols
        symbolWidth: 20,  // Adjust the width of the legend symbols
        symbolRadius: 2,  // Set symbolRadius to 0 for square symbols
        itemStyle: {
          fontWeight: 'normal' // Optional: Adjust the style of the legend items
        }
      },
      series: dataSeries
    } as Highcharts.Options);
  }
  createChart5() {
    // Generate dummy data
    const categories = ['Category A', 'Category B', 'Category C'];
    const dataSeries = [
      {
        name: 'Series 1',
        data: [10, 20, 15]
      },
      {
        name: 'Series 2',
        data: [30, 15, 25]
      },
      {
        name: 'Series 3',
        data: [5, 10, 8]
      }
    ];

    Highcharts.chart('curvedLine5', {
      chart: {
        type: 'column',
        plotBorderColor: 'black',
        plotBorderWidth: 1,
        height: 240
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: categories
      },
      yAxis: {
        title: {
          text: 'Value'
        },
        min: 0,
        max: 100,
        gridLineWidth: 0
      },
      plotOptions: {
        column: {
          stacking: 'normal'
        }
      },
      legend: {
        symbolHeight: 12,
        symbolWidth: 20,
        symbolRadius: 0,
        itemStyle: {
          fontWeight: 'normal'
        }
      },
      series: dataSeries
    } as Highcharts.Options);
  }

  isFullScreen = false;

  toggleFullScreen() {
    if (!this.isFullScreen) {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
        this.isFullScreen = true;
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        this.isFullScreen = false;
      }
    }
  }
  isExpanded = false;
  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
    this.toggleFullScreen(); // Toggle full-screen mode when expanding
  }
  //full screen for graph

  
 
}
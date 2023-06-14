import { Component } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {
  devices: any[] = [
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
  ];
}

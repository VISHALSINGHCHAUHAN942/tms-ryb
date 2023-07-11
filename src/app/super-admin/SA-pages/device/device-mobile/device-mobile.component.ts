import { Component } from '@angular/core';

@Component({
  selector: 'app-device-mobile',
  templateUrl: './device-mobile.component.html',
  styleUrls: ['./device-mobile.component.css']
})
export class DeviceMobileComponent {

  panelOpenState=false;

  data = [
    {dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On' ,color: 'primary',modification : '21-08-23'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On' ,color: 'primary' ,modification : '21-08-23'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname : 'ABC  ', location: 'Nagpur', status: 'On' ,color: 'primary',modification : '21-08-23'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On'  ,color: 'warn',modification : '21-08-23'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On'  ,color: 'warn',modification : '21-08-23'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname:  'ABC  ', location: 'Nagpur', status: 'On' ,color: 'primary',modification : '21-08-23'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On'  ,color: 'warn',modification : '21-08-23'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On' ,color: 'warn',modification : '21-08-23'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On' ,color: 'primary',modification : '21-08-23'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On' ,color: 'primary',modification : '21-08-23'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC  ', location: 'Nagpur', status: 'On' ,color: 'primary', modification :'21-08-23'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname:'ABC  ', location: 'Nagpur', status: 'i'  ,color: 'warn', modification :'21-08-23'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC', location: 'Nagpur', status: 'i'  ,color: 'warn', modification :'21-08-23'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC', location: 'Nagpur', status: 'i' ,color: 'primary', modification :'21-08-23'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC', location: 'Nagpur', status: 'i' ,color: 'primary', modification :'21-08-23'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC', location: 'Nagpur', status: 'i'  ,color: 'warn', modification :'21-08-23'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC', location: '12:00', status: 'i' ,color: 'primary', modification :'yes'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC', location: '12:00', status: 'i'  ,color: 'warn', modification :'yes'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC', location: '12:00', status: 'i' ,color: 'primary', modification :'yes'},
    { dname: 'Ashwin', uniqueid: 'VDYU673572', Cname: 'ABC', location: '12:00', status: 'i' ,color: 'primary', modification :'yes'},
  ];
}

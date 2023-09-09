import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SuperAdminService implements OnInit{

  constructor(private http: HttpClient, private router: Router) { }

  private readonly API_URL = 'http://ec2-3-108-57-100.ap-south-1.compute.amazonaws.com:3000';

  // getTableData():Observable<any> {
  //   return this.http.get(`${this.API_URL}/logs`);
  // }
  currentTime: Date = new Date();
  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  getTableData() : Promise<any>{
    return this.http.get('http://ec2-3-108-57-100.ap-south-1.compute.amazonaws.com:3000/logs').
    toPromise();
  }
  getApiTrackerData() : Promise<any>{
    return this.http.get('http://ec2-3-108-57-100.ap-south-1.compute.amazonaws.com:3000/apilogs').
    toPromise();
  }
  getDeviceData() : Promise<any>{
    return this.http.get('http://ec2-3-108-57-100.ap-south-1.compute.amazonaws.com:3000/devicelogs').
    toPromise();
  }

}

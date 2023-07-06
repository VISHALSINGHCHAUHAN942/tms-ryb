import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashDataService {

  constructor(private http: HttpClient, private router: Router) {}

  private readonly API_URL = 'http://ec2-43-204-32-198.ap-south-1.compute.amazonaws.com:3000';

  userDevices(CompanyEmail: string): Observable<any> {
    return this.http.get(`${this.API_URL}/userdevices/${CompanyEmail}`);
  }
  
  editDevice(DeviceUID: string, DeviceData:any):Observable<any> {
    return this.http.post(`${this.API_URL}/editDevice/${DeviceUID}`, DeviceData)
  }

  fetchTriggerAll(CompanyEmail: string):Observable<any> {
    return this.http.get(`${this.API_URL}/user-devices-trigger/${CompanyEmail}`);
  }


}
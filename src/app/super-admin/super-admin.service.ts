import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  constructor(private http: HttpClient, private router: Router) { }

  private readonly API_URL = 'http://ec2-3-108-57-100.ap-south-1.compute.amazonaws.com:3000';

  // Get table data
  getTableData(): Promise<any> {
    return this.http.get(`${this.API_URL}/logs`).toPromise();
  }

  // Get API tracker data
  getApiTrackerData(): Promise<any> {
    return this.http.get(`${this.API_URL}/apilogs`).toPromise();
  }

  // Get device data
  getDeviceData(): Observable<any> {
    return this.http.get(`${this.API_URL}/devicelogs`);
  }

  // Get user details
  getUserDetails(): Promise<any> {
    return this.http.get(`${this.API_URL}/usermanagement`).toPromise();
  }

  // Get company information
  getCompanyInfo(): Promise<any> {
    return this.http.get(`${this.API_URL}/compInfo`).toPromise();
  }

  // Get notification data
 

  getNotification() : Promise<any>{
    return this.http.get(`${this.API_URL}/notification`).
    toPromise();
  }
  
  // Get alarms data
  getalarmsdata(): Promise<any> {
    return this.http.get(`${this.API_URL}/alarms`).toPromise();
  }

  // Get user information
  getUSerInfo(): Promise<any> {
    return this.http.get(`${this.API_URL}/userInfo`).toPromise();
  }

  // Get device count
  getDevicecount(): Observable<any> {
    return this.http.get(`${this.API_URL}/devicecount`);
  }

  // Get device info
  getDeviceInfo(): Promise<any> {
    return this.http.get(`${this.API_URL}/devicelogs`).toPromise();
  }

  // Add a device
  addDevice(DeviceData: any): Observable<any> {
    return this.http.post('http://ec2-3-108-57-100.ap-south-1.compute.amazonaws.com:3000/addDevice', DeviceData);
  }

  // Delete a user
  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/removeUser/${userId}`);
  }

  updateCompanyDetails(UserId: string, UserData: any): Observable<any> {
    return this.http.put(`${this.API_URL}/companyDetails/${UserId}`, UserData);
  }

  toggleBlockUser(UserId: string, action: any): Observable<any> {
    return this.http.put(`${this.API_URL}/users/${UserId}/block`, action);
  }
  gettransportGraphData(): Observable<any> {
    return this.http.get(`${this.API_URL}/transport`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashDataService {

  constructor(private http: HttpClient, private router: Router) {}

  private readonly API_URL = 'http://localhost:4000';

  userDevices(CompanyEmail: string): Observable<any> {
    return this.http.get(`${this.API_URL}/userdevices/${CompanyEmail}`);
  }


}
import {Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SuperAdminService } from '../../super-admin.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import { AddDeviceComponent } from '../device/add-device/add-device.component';



export interface PeriodicElement {
  id:any;
  company_name:any;
  total_users:any;
  active_users:any;
  inactive_users:any;
  created_at:any;
  updated_at:any;
}

const ELEMENT_DATA: PeriodicElement[] = [];
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],

})

export class CompanyComponent implements OnInit{
  
  displayedColumns: string[] = ['id','company_name','total_users','active_users','inactive_users','created_at','updated_at'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);
   currentTime: Date = new Date();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private service: SuperAdminService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.service.getCompanyInfo().then(data => {
      this.dataSource.data = data.logs;
      this.dataSource.paginator = this.paginator;
      console.log(data);
      
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  openDialog() {
    this.dialog.open(AddDeviceComponent);
  }
}

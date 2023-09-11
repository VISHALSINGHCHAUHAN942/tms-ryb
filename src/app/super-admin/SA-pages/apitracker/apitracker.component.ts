import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SuperAdminService } from '../../super-admin.service';

export interface Data {
  id: any;
  created_time: any;
  tenant_id: any;
  entity_type: any;
  entity_id: any;
  transport: any;
  db_storage: any;
  re_exec: any;
  js_exec: any;
  email_exec: any;
  sms_exec: any;
  alarm_exec: any;
  status: any;
  message: any;
}

@Component({
  selector: 'app-apitracker',
  templateUrl: './apitracker.component.html',
  styleUrls: ['./apitracker.component.css'],
})
export class ApitrackerComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  isLoading: boolean = true;

  displayedColumns: string[] = [
    'id',
    'created_time',
    'tenant_id',
    'entity_type',
    'entity_id',
    'transport',
    'db_storage',
    're_exec',
    'js_exec',
    'email_exec',
    'sms_exec',
    'alarm_exec',
    'status',
    'message',
  ];
  dataSource: MatTableDataSource<Data>;

  constructor(private service: SuperAdminService) {
    this.dataSource = new MatTableDataSource<Data>([]); // Initialize with an empty array
  }
  currentTime: Date = new Date();
  ngOnInit(): void {
    this.service.getApiTrackerData().then((data) => {
      this.dataSource.data = data.logs; // Assign data to the MatTableDataSource
      this.dataSource.paginator = this.paginator;
      this.isLoading = false; 
      setInterval(() => {
        this.currentTime = new Date();
      }, 1000);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

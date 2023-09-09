import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SuperAdminService } from '../../super-admin.service';

export interface AuditLog {
  id: any;
  timestamp: any;
  ip: any;
  entity_type: any;
  entity_name: any;
  username: any;
  user_type: any;
  request_type: any;
  status: any;
  details: any;
}

@Component({
  selector: 'app-audit-logs',
  templateUrl: './audit-logs.component.html',
  styleUrls: ['./audit-logs.component.css']
})
export class AuditLogsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'timestamp', 'ip', 'entity_type', 'entity_name', 'username', 'user_type', 'request_type', 'status', 'details'];
  dataSource = new MatTableDataSource<AuditLog>([]);
   currentTime: Date = new Date();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private service: SuperAdminService) {}

  ngOnInit(): void {
    this.service.getTableData().then(data => {
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
}

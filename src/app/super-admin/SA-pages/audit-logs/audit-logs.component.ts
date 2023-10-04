import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SuperAdminService } from '../../super-admin.service';
import{ SaService } from '../../sa.service';

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
  selectedValue: string = '10hour';
  displayedColumns: string[] = ['id', 'timestamp', 'ip', 'entity_type', 'entity_name', 'username', 'user_type', 'request_type', 'status', 'details'];
  dataSource = new MatTableDataSource<AuditLog>([]);
   currentTime: Date = new Date();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(public saService: SaService, private service: SuperAdminService) {}

  ngOnInit(): void {
    this.saService.isPageLoading(true);
    this.getAuditLogs();
  }

  getAuditLogs(){
    this.service.getAuditlogsData().then(logsdata => {
      console.log(logsdata);
      this.dataSource.data = logsdata.data;
      this.dataSource.paginator = this.paginator;
      this.saService.isPageLoading(false);
      setInterval(() => {
        this.currentTime = new Date();
      }, 1000);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  // apilogs-def-10
  // logs-def-30
    
}

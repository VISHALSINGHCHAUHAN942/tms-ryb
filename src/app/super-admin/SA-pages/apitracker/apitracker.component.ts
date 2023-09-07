import { Component , OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { SuperAdminService } from '../../super-admin.service';

export interface Data {
  'id' :any;
  'created_time' :any;
  'tenant_id':any;
  'entity_type':any;
  'entity_id' :any;
  'transport' :any;
  'db_storage' :any;
  're_exec' :any;
  'js_exec' :any;
  'email_exec' :any;
  'sms_exec' :any;
  'alarm_exec' :any;
  'status' :any;
  'message' :any;
} 
const ELEMENT_DATA: Data[] = [
];
@Component({
  selector: 'app-apitracker',
  templateUrl: './apitracker.component.html',
  styleUrls: ['./apitracker.component.css']
})
export class ApitrackerComponent {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns: string[] = ['id','created_time','tenant_id','entity_type','entity_id','transport','db_storage','re_exec','js_exec','email_exec','sms_exec','alarm_exec','status','message'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource : any[] = [];

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  // this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  // ngOnInit(): void {
  // this.dataSource = new MatTableDataSource<Data>(ELEMENT_DATA);
  // this.dataSource.paginator = this.paginator;
  // }
  constructor(private service : SuperAdminService){
    this.service.getApiTrackerData().then(data => {
      this.dataSource= data.logs;
      console.log(this.dataSource);
    });
  }


  }


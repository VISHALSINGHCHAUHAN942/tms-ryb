
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { SuperAdminService } from '../../super-admin.service';

export interface Data {
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
const ELEMENT_DATA: Data[] = [
];

@Component({
  selector: 'app-audit-logs',
  templateUrl: './audit-logs.component.html',
  styleUrls: ['./audit-logs.component.css']
})
export class AuditLogsComponent  {
  displayedColumns:string[] = ['id',"timestamp","ip","entity_type","entity_name","username","user_type","request_type","status","details"] ;
  dataSource :Data[]= [];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

//   constructor(private service: SuperAdminService) {
//     this.service.getTableData(). subscribe((data: Data[]) => {
//       this.dataSource = data;
//       console.log(data);
//   });
// }
constructor(private service : SuperAdminService){
  this.service.getTableData().then(data => {
    this.dataSource = data.logs;
    console.log(this.dataSource);
  });
}

  // ngOnInit(): void {
  //   this.service.getTableData().subscribe((data: Data[]) => {
  //     this.dataSource = data; 
  //     console.table(data);
  //   });
  // }
}



















// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatTableDataSource } from '@angular/material/table';
// import { SuperAdminService } from '../../super-admin.service';

// export interface data {
//   id:any;
//   timestamp: any;
//   ip:any;
//   entity_type: any;
//   entity_name:any;
//   username:any;
//   user_type:any;
//   request_type:any;
//    status:any;
//   details:any;
// }
// const ELEMENT_DATA: data[] = [
// ];


// @Component({
//   selector: 'app-audit-logs',
//   templateUrl: './audit-logs.component.html',
//   styleUrls: ['./audit-logs.component.css']
// })



// export class AuditLogsComponent implements OnInit {

  // displayedColumns: string[] = ['id','timestamp','ip', 'entity_type','entity_name','username','user_type','request_type','status','details'];
  
  // dataSource : any[] = [];

  // constructor(private service : SuperAdminService){
  //   this.service.userDetails().then(data => {
  //     this.dataSource = data;
  //   });
  // }
 // displayedColumns: string[] = ['id', 'timestamp', 'ip', 'entity_type', 'entity_name', 'username', 'user_type', 'request_type', 'status', 'details'];
  // dataSource: MatTableDataSource<any>; // Use MatTableDataSource
  // dataSource : any[] = [];

  // constructor(private service: SuperAdminService) {
    // this.dataSource = new MatTableDataSource<any>([]); // Initialize with an empty array
//     this.dataSource = data;
//   }

//   ngOnInit(): void {
//     this.service.getTableData().subscribe((data: any) => {
//       this.dataSource.data = data; // Assign data to MatTableDataSource
//     });
//   }
// }


  




  // @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  // tick = false; 
  
  // displayedColumns: string[] = ['id','timestamp','ip', 'entity_type','entity_name','username','user_type','request_type','status','details'];
  // dataSource!: MatTableDataSource<unread>;

  // ngOnInit(): void {
  //   this.dataSource = new MatTableDataSource<unread>(ELEMENT_DATA);
  //   this.dataSource.paginator = this.paginator;
  // }

// export interface unread {
//   id:any;
//   timestamp: any;
//   ip:any;
//   entity_type: any;
//   entity_name:any;
//   username:any;
//   user_type:any;
//   request_type:any;
//    status:any;
//    details:any;
//   isSelected?: boolean; // 
// }
// const ELEMENT_DATA :unread[]=[
// {id:1, timestamp:'2023-08-29 11:53:32',ip:'1',entity_type:'User',entity_name:'senselive',username:'vishalchouhannainpur@gmail.com',user_type:'N/a',request_type:'n/a',status:'success',details:'.....'},
// ];


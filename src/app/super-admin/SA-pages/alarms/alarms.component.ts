import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  device_name: string;
  device_ip: string;
  createtime: number;
  type:string;
  Severity : string;
  status:string;
  assignee:string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {createtime: 1, device_name: 'Hydrogen',device_ip:'Abcs21424', type: 'senslive', Severity : 'H',status:'online',assignee:'user 1'},
  {createtime: 1, device_name: 'Hydrogen',device_ip:'Abcs21424', type: 'senslive', Severity : 'H',status:'online',assignee:'user 1'},
  {createtime: 1, device_name: 'Hydrogen',device_ip:'Abcs21424', type: 'senslive', Severity : 'H',status:'online',assignee:'user 1'},
  {createtime: 1, device_name: 'Hydrogen',device_ip:'Abcs21424', type: 'senslive', Severity : 'H',status:'online',assignee:'user 1'},
  {createtime: 1, device_name: 'Hydrogen',device_ip:'Abcs21424', type: 'senslive', Severity : 'H',status:'online',assignee:'user 1'},
  {createtime: 1, device_name: 'Hydrogen',device_ip:'Abcs21424', type: 'senslive', Severity : 'H',status:'online',assignee:'user 1'},
  {createtime: 1, device_name: 'Hydrogen',device_ip:'Abcs21424', type: 'senslive', Severity : 'H',status:'online',assignee:'user 1'},
  {createtime: 1, device_name: 'Hydrogen',device_ip:'Abcs21424', type: 'senslive', Severity : 'H',status:'online',assignee:'user 1'},
  {createtime: 1, device_name: 'Hydrogen',device_ip:'Abcs21424', type: 'senslive', Severity : 'H',status:'online',assignee:'user 1'},
  {createtime: 1, device_name: 'Hydrogen',device_ip:'Abcs21424', type: 'senslive', Severity : 'H',status:'online',assignee:'user 1'},
  {createtime: 1, device_name: 'Hydrogen',device_ip:'Abcs21424', type: 'senslive', Severity : 'H',status:'online',assignee:'user 1'},
  {createtime: 1, device_name: 'Hydrogen',device_ip:'Abcs21424', type: 'senslive', Severity : 'H',status:'online',assignee:'user 1'},
  {createtime: 1, device_name: 'Hydrogen',device_ip:'Abcs21424', type: 'senslive', Severity : 'H',status:'online',assignee:'user 1'},
  {createtime: 1, device_name: 'Hydrogen',device_ip:'Abcs21424', type: 'senslive', Severity : 'H',status:'online',assignee:'user 1'},
  {createtime: 1, device_name: 'Hydrogen',device_ip:'Abcs21424', type: 'senslive', Severity : 'H',status:'online',assignee:'user 1'},
];


@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css']
})
export class AlarmsComponent implements OnInit{
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  displayedColumns: string[] = ['createtime', 'device_name','device_ip', 'type', 'Severity','assignee','status','details'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }
}

import { Component,OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit{

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  tick = false; 
  
  displayedColumns2: string[] = ['check','create_time', 'type','subject','message','actions'];
  dataSource2!: MatTableDataSource<unread>;

  displayedColumns3: string[] = ['check','create_time', 'type','subject','message','actions'];
  dataSource3!: MatTableDataSource<AllNotificationData>;

  displayedColumns4: string[] = ['check','create_time', 'type','subject','message','actions'];
  dataSource4!: MatTableDataSource<Sent>;

  displayedColumns5: string[] = ['check','create_time', 'type','subject','message','actions'];
  dataSource5!: MatTableDataSource<Recipients>;

  displayedColumns6: string[] = ['check','create_time', 'type','subject','message','actions'];
  dataSource6!: MatTableDataSource<Template>;

  displayedColumns7: string[] = ['check','create_time', 'type','subject','message','actions'];
  dataSource7!: MatTableDataSource<Rules>;

  bulk(event: any): void {
    this.tick = event.checked;
    this.dataSource2.data.forEach((row: unread) => {
      row.isSelected = this.tick;
    });
  }
 

  ngOnInit(): void {
    this.dataSource2 = new MatTableDataSource<unread>(ELEMENT_DATA);
    this.dataSource2.paginator = this.paginator;

    this.dataSource3 = new MatTableDataSource<AllNotificationData>(ELEMENT_DATA3);
    this.dataSource3.paginator = this.paginator;

    this.dataSource4 = new MatTableDataSource<Sent>(ELEMENT_DATA4);
    // this.dataSource4.paginator = this.paginator;

    this.dataSource5 = new MatTableDataSource<Recipients>(ELEMENT_DATA5);
    // this.dataSource5.paginator = this.paginator;

    this.dataSource6 = new MatTableDataSource<Template>(ELEMENT_DATA6);
    // this.dataSource6.paginator = this.paginator;

    this.dataSource7 = new MatTableDataSource<Rules>(ELEMENT_DATA7);
    // this.dataSource7.paginator = this.paginator;
  }
}


export interface unread {
  create_time: any;
  type: any;
  subject:any;
  message:any;
  isSelected?: boolean; // 
}
const ELEMENT_DATA :unread[]=[
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
];

export interface AllNotificationData{
  create_time: any;
  type: any;
  subject:any;
  message:any;

}
const ELEMENT_DATA3 :AllNotificationData[]=[
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
  ];


  export interface Sent{
    create_time: any;
    type: any;
    subject:any;
    message:any;
  }

  const ELEMENT_DATA4 :Sent[]=[
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},{create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    {create_time:'2023-08-29 11:53:32',type:'	Alarm',subject:'	New alarm `High Temperature`',message:'	Severity: critical, originator: Device`Sensor T1` '},
    ];

    export interface Recipients{
      create_time: any;
      type: any;
      subject:any;
      message:any;
    }
    const ELEMENT_DATA5 :Recipients[]=[
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},
      {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'	If rule trigger is an action that affects some user (e.g. alarm assigned to user) - this user '},

      ];


      export interface Template{
        create_time: any;
        type: any;
        subject:any;
        message:any;
      }
      const ELEMENT_DATA6 :Template[]=[
        {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},
        {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},
        {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},
        {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},
        {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},
        {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},
        {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},
        {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},
        {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},  
        ];

        export interface Rules{
          create_time: any;
          type: any;
          subject:any;
          message:any;
        }
        const ELEMENT_DATA7 :Rules[]=[
          {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},
          {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},
          {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},
          {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},
          {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},
          {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},
          {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},
          {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},
          {create_time:'2023-08-29 11:53:32',type:'Affected user',subject:'	Platform users',message:'Rule chain/node lifecycle failure notification '},  
          ];
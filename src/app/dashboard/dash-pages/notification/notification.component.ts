import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

 
  panelOpenState = false;

   notifications = [
      {
        title: 'Notification 1',
        summary: 'Summary of notification 1',
        content: 'This is the primary content of notification 1.'
      },
      {
        title: 'Notification 2',
        summary: 'Summary of notification 2',
        content: 'This is the primary content of notification 2.'
      },
      {
        title: 'Notification 3',
        summary: 'Summary of notification 3',
        content: 'This is the primary content of notification 2.'
      },
      {
        title: 'Notification 4',
        summary: 'Summary of notification 4',
        content: 'This is the primary content of notification 2.'
      },
      {
        title: 'Notification 5',
        summary: 'Summary of notification 5',
        content: 'This is the primary content of notification 2.'
      },
      {
        title: 'Notification 1',
        summary: 'Summary of notification 1',
        content: 'This is the primary content of notification 1.'
      },
      {
        title: 'Notification 2',
        summary: 'Summary of notification 2',
        content: 'This is the primary content of notification 2.'
      },
      {
        title: 'Notification 3',
        summary: 'Summary of notification 3',
        content: 'This is the primary content of notification 2.'
      },
      {
        title: 'Notification 4',
        summary: 'Summary of notification 4',
        content: 'This is the primary content of notification 2.'
      },{
        title: 'Notification 1',
        summary: 'Summary of notification 1',
        content: 'This is the primary content of notification 1.'
      },
      {
        title: 'Notification 2',
        summary: 'Summary of notification 2',
        content: 'This is the primary content of notification 2.'
      },
      {
        title: 'Notification 3',
        summary: 'Summary of notification 3',
        content: 'This is the primary content of notification 2.'
      },
      {
        title: 'Notification 4',
        summary: 'Summary of notification 4',
        content: 'This is the primary content of notification 2.'
      }
      // Add more notifications as needed
    ];
   logs = [
    {message: "Hi Thisis Log 1."},
    {message: "Hi Thisis Log 2."},
    {message: "Hi Thisis Log 3."},
    {message: "Hi Thisis Log 4."},
    {message: "Hi Thisis Log 5."},
    {message: "Hi Thisis Log 6."},
    {message: "Hi Thisis Log 7."},
    {message: "Hi Thisis Log 8."},
    {message: "Hi Thisis Log 9."},
    {message: "Hi Thisis Log 10."},
    {message: "Hi Thisis Log 11."},
    {message: "Hi Thisis Log 12."},
    {message: "Hi Thisis Log 13."},
    {message: "Hi Thisis Log 14."},
    {message: "Hi Thisis Log 15."},
    {message: "Hi Thisis Log 16."},
    {message: "Hi Thisis Log 17."},
    {message: "Hi Thisis Log 18."},
    {message: "Hi Thisis Log 19."},
    {message: "Hi Thisis Log 20."}
  ]

}


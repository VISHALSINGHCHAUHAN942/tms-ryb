import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-user-manager',
  templateUrl: './mobile-user-manager.component.html',
  styleUrls: ['./mobile-user-manager.component.css']
})
export class MobileUserManagerComponent {


  panelOpenState=false;

  data = [
    // user tab
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior Developer',color: 'primary',url:'https://mdbootstrap.com/img/new/avatars/8.jpg' ,company:'Senslive Technologies',role:'Front-end developer'},
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Offline',position:'senior' ,color: 'warn',url:'https://mdbootstrap.com/img/new/avatars/6.jpg',company:'Senslive Technologies',role:'Front-end developer'},
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' ,color: 'primary',url:'https://mdbootstrap.com/img/new/avatars/7.jpg',company:'Senslive Technologies',role:'Front-end developer'},
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior',color: 'primary',url:'https://mdbootstrap.com/img/new/avatars/8.jpg' ,company:'Senslive Technologies',role:'Front-end developer'},
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' ,color: 'primary',url:'https://mdbootstrap.com/img/new/avatars/6.jpg',company:'Senslive Technologies',role:'Front-end developer'},
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' ,color: 'accent',url:'https://mdbootstrap.com/img/new/avatars/7.jpg',company:'Senslive Technologies',role:'Front-end developer'},
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' ,color: 'accent',url:'https://mdbootstrap.com/img/new/avatars/8.jpg',company:'Senslive Technologies',role:'Front-end developer'},
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' ,color: 'accent',url:'https://mdbootstrap.com/img/new/avatars/8.jpg',company:'Senslive Technologies',role:'Front-end developer'},
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' ,color: 'accent',url:'https://mdbootstrap.com/img/new/avatars/8.jpg',company:'Senslive Technologies',role:'Front-end developer'},
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' ,color: 'accent',url:'https://mdbootstrap.com/img/new/avatars/8.jpg',company:'Senslive Technologies',role:'Front-end developer'},
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' ,color: 'accent',url:'https://mdbootstrap.com/img/new/avatars/8.jpg',company:'Senslive Technologies',role:'Front-end developer'},
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' ,color: 'accent',url:'https://mdbootstrap.com/img/new/avatars/8.jpg',company:'Senslive Technologies',role:'Front-end developer'},
    // device tabs


  ];
 

}



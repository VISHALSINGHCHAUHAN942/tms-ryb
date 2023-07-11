import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-user-manager',
  templateUrl: './mobile-user-manager.component.html',
  styleUrls: ['./mobile-user-manager.component.css']
})
export class MobileUserManagerComponent {


  panelOpenState=false;

  data = [
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' },
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' },
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' },
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' },
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' },
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' },
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' },

  ];

}

 // { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' },

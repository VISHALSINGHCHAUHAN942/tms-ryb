import { Component } from '@angular/core';



@Component({
  selector: 'app-destop-user-manager',
  templateUrl: './destop-user-manager.component.html',
  styleUrls: ['./destop-user-manager.component.css']
})
export class DestopUserManagerComponent {
  displayedColumns: string[] = ['avatar','firstName','designation','status','actions'];  //, 

  dataSource: any[] = [
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active',position:'senior' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', designation: 'Designer', status: 'Inactive',position:'senior' },
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active' ,position:'senior' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', designation: 'Designer', status: 'Inactive',position:'senior' },
     { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', designation: 'Designer', status: 'Inactive',position:'senior' },
     { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active' ,position:'senior' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', designation: 'Designer', status: 'Inactive',position:'senior' },
     { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', designation: 'Designer', status: 'Inactive',position:'senior' },
     { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active' ,position:'senior' },
     { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', designation: 'Designer', status: 'Inactive',position:'senior' },
      { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', designation: 'Designer', status: 'Inactive',position:'senior' },

    // Add more dummy data objects here
 ];

  
  




}

import { Component } from '@angular/core';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent {
  displayedColumns: string[] = ['Name', 'designation', 'status', 'Action'];

  dataSource: any[] = [
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', designation: 'Designer', status: 'Inactive' },
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', designation: 'Developer', status: 'Active' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', designation: 'Designer', status: 'Inactive' }
    // Add more dummy data objects here
  ];

}

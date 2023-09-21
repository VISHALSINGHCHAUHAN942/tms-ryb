import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SuperAdminService } from '../../super-admin.service';
import { EdituserComponent } from './edituser/edituser.component';
import { EditCompanyComponent } from '../company/edit-company/edit-company.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import{ SaService } from '../../sa.service';

// userId: number;
// userName: string;
// Details: string;
// companyName:string;
// Role:string;
// Email:string;
// isSelected?: boolean;

export interface PeriodicElement{
  UserId:any;
  Username:any;
  CompanyName:any;
  Designation:any;
  PersonalEmail:any;
  Location:any;
  ContactNo:any;
  Block:any;
  }
  
  const Data: PeriodicElement[] = [];
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{

  currentTime: Date = new Date();
  displayedColumns: string[] = ['UserId','Username','CompanyName','Designation','PersonalEmail','Location','ContactNo','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(public saService: SaService, private service :SuperAdminService,public dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void { 
    this.getUserData();
    this.saService.isPageLoading(true);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  //function to get data from api
  getUserData(){
    this.service.getUserDetails().then(data => {
      console.log(data);
      this.dataSource.data = data.userDetails;
      this.dataSource.paginator = this.paginator;
      this.saService.isPageLoading(false);
    });
  }


 
   //function for delete user 
  deleteUser(user: PeriodicElement) {
    const userId = user.UserId; 
    this.service.deleteUser(userId).subscribe(
        (response) => {
            console.log('User deleted:', response);
            this.snackBar.open('User deleted successfully', 'Close', {
                duration: 2000, 
            });
            const index = this.dataSource.data.indexOf(user);
            if (index !== -1) {
                this.dataSource.data.splice(index, 1);
                this.dataSource._updateChangeSubscription(); 
            }
        },
        (error) => {
            console.error('Error deleting user:', error);
            this.snackBar.open('Error deleting user', 'Close', {
                duration: 2000, 
                panelClass: ['error-snackbar'],
            });
        }
    );
}

toggleBlockUser(user: PeriodicElement) {
  const userId = user.UserId;

  // Determine the action based on the current Block status
  const action = user.Block === 0 ? 'block' : 'unblock';

  const requestData = { action: action }; // Create JSON data

  this.service.toggleBlockUser(userId, requestData).subscribe(
    (response) => {
      console.log(`${action} User:`, response);
      this.getUserData();

      this.snackBar.open(`${action}ed successfully`, 'Close', {
        duration: 2000,
      });
    },
    (error) => {
      console.error(`Error ${action}ing user:`, error);
      this.snackBar.open(`Error ${action}ing user`, 'Close', {
        duration: 2000,
        panelClass: ['error-snackbar'],
      });
    }
  );
}



  openEditUserDialog(user: any): void {
   // console.log(user);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = 'auto';
    dialogConfig.maxWidth = '90vw';
    dialogConfig.data = { user }; 
    const dialogRef = this.dialog.open(EdituserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(deviceAdded => {   
      this.getUserData();
     });
  }
}
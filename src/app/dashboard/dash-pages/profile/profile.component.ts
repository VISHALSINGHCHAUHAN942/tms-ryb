import { Component, OnInit } from '@angular/core';
import { DashDataService } from '../../dash-data-service/dash-data.service';
import { AuthService } from '../../../login/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor(private authService:AuthService, private DashDataService:DashDataService){}
  fname!: string;
  lname!: string;
  companyEmail!: string;
  personalEmail!: string;
  companyName!: string;
  location!: string;
  designation!: string;
  contactNo!: string ;
  hide = true;
  userId!: string | null;

  ngOnInit() {
    this.fetchUserData();
  }

  fetchUserData() {
    const sessionUserId = sessionStorage.getItem('UserId');
    console.log(sessionUserId);
    if (sessionUserId) {
      this.DashDataService.userDetails(sessionUserId).subscribe(
        (userData) => {
          this.fname = userData[0].FirstName;
          this.lname = userData[0].LastName;
          this.companyEmail = userData[0].CompanyEmail;
          this.personalEmail = userData[0].PersonalEmail;
          this.companyName = userData[0].CompanyName;
          this.location = userData[0].Location;
          this.designation = userData[0].Designation;
          this.contactNo = userData[0].ContactNo;
        },
        (error) => {
          console.log("Error for getting details!");
        }
      );
    } else {
          console.log("UserId is not available!")
    }
  }

}

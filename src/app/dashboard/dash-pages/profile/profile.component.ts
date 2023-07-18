import { Component, OnInit } from '@angular/core';
import { DashDataService } from '../../dash-data-service/dash-data.service';
import { AuthService } from '../../../login/auth/auth.service';
import { FormControl, Validators } from '@angular/forms';


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
  cancelCompany: boolean = false;
  cancelPersonal: boolean = false;
  cancelPassword: boolean = false;
  

  f_Name = new FormControl('', [Validators.required]);
  l_Name = new FormControl('', [Validators.required]);
  company_Name = new FormControl('', [Validators.required]);
  contact_No = new FormControl('', [Validators.required]);
  lo_cation = new FormControl('', [Validators.required]);
  newPassword = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);



  ngOnInit() {
    this.fetchUserData();
  }

  toggleCompany(){
    this.cancelCompany = !this.cancelCompany;
  }

  togglePersonal(){
    this.cancelPersonal = !this.cancelPersonal;
  }

  togglePassword(){
    this.cancelPassword = !this.cancelPassword;
  }

  fetchUserData() {
    this.userId = sessionStorage.getItem('UserId');
    if (this.userId) {
      this.DashDataService.userDetails(this.userId).subscribe(
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

  /*updateCompany() {
    const PersonalData = {

    }
    if (this.userId) {
      this.DashDataService.userDetails(this.userId).subscribe(
        (userData) => {
        },
        (error) => {
          console.log("Error for getting details!");
        }
      );
    } else {
          console.log("UserId is not available!")
    }

  }*/
}

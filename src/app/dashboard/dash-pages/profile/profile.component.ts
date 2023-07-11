import { Component } from '@angular/core';
import { DashDataService } from '../../dash-data-service/dash-data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  // companyDetail:{companyName: string,companyEmail: string,location: string,designation: string,contact: string} = { companyName: '',companyEmail: '',location: '',designation: '',contact:''};
  // personalDetail:{firstName: string,lastName: string,personalEmail: string,}={firstName: '',lastName: '',personalEmail:''};
  // password:{password:string}={password:''};
  // hide = true;

  // retrieveCompanyData() {
  //   console.log(this.companyDetail);
  // };

  // retrievePersonalData() {
  //   console.log(this.personalDetail);
  // };

  // retrievePassword() {
  //   console.log(this.password);
  // }


  companyDetail: { companyName: string, companyEmail: string, location: string, designation: string, contact: string } = {
    companyName: '',
    companyEmail: '',
    location: '',
    designation: '',
    contact: ''
  };
  
  personalDetail: { firstName: string, lastName: string, personalEmail: string } = {
    firstName: '',
    lastName: '',
    personalEmail: ''
  };
  
  password: { password: string } = { password: '' };
  
  hide = true;
  http: any;
  API_URL: any;
  
  retrieveCompanyData() {
    console.log(this.companyDetail);
    this.updateCompanyData();
  }
  
  retrievePersonalData() {
    console.log(this.personalDetail);
    this.updatePersonalData();
  }
  
  retrievePassword() {
    console.log(this.password);
    this.updatePassword();
  }
  
  updateCompanyData() {
    this.http.put(`${this.API_URL}/companyDetails`, this.companyDetail).subscribe(
      (response: any) => {
        console.log('Company data updated successfully:', response);
      },
      (error: any) => {
        console.error('Error updating company data:', error);
      }
    );
  }
  
  updatePersonalData() {
    this.http.put(`${this.API_URL}/personalDetails`, this.personalDetail).subscribe(
      (response: any) => {
        console.log('Personal data updated successfully:', response);
      },
      (error: any) => {
        console.error('Error updating personal data:', error);
      }
    );
  }
  
  updatePassword() {
    this.http.put(`${this.API_URL}/password`, this.password).subscribe(
      (response: any) => {
        console.log('Password updated successfully:', response);
      },
      (error: any) => {
        console.error('Error updating password:', error);
      }
    );
  }
  

  // fname: string = "Kaushal";
  // lname: string = "Pohekar";
  // personalEmail: string = "kaushal@senselive.com";
  // fname: string = "Kaushal";
  // lname: string = "Pohekar";
  // personalEmail: string = "kaushal@senselive.com";
 
  // companyEmail: string = "Sense@live.com";
  
  // companyName: string = "Senselive Technologies";
  // location: string = "Nagpur";
  // designation: string = "CEO";
  // contactNo: string = "123456789";
  // hide = true;

  showNewButton: boolean = false;
  buttonText: string = 'Edit';
 
   // for show new button while click
  toggleButton(): void {
    if (this.showNewButton) {
      this.showNewButton = false;
      this.buttonText = 'Edit';
    } else {
      this.showNewButton = true;
      this.buttonText = 'Cancel';
    }
  }
  editMode: boolean = false;


  toggleEditMode() {
    this.editMode = !this.editMode;
  }
}

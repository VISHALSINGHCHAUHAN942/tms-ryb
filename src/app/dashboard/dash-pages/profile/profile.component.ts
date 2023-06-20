import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  fname: string = "Kaushal";
  lname: string = "Pohekar";
  companyEmail: string = "Sense@live.com";
  personalEmail: string = "kaushal@senselive.com";
  companyName: string = "Senselive Technologies";
  location: string = "Nagpur";
  designation: string = "CEO";
  contactNo: string = "123456789";
  hide = true;
}

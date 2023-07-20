import { Component, OnInit } from '@angular/core';
import { DashDataService } from '../../dash-data-service/dash-data.service';
import { AuthService } from '../../../login/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{
  UserEmail!: string | null;
  notifications: any[] = [];
  unreadCount!: any;

  constructor(
    private DashDataService: DashDataService,
    private authService: AuthService,
    public snackBar: MatSnackBar,
  ) {}
 
  panelOpenState = false;


  ngOnInit(){
    this.userEmail();
  }

  userEmail(){
    const sessionUserId = sessionStorage.getItem('UserId');
    if(sessionUserId){
      this.DashDataService.userDetails(sessionUserId).subscribe(
        (userData) => {
          this.UserEmail = userData[0].PersonalEmail;
          console.log(this.UserEmail);
          this.userMessages();
        },
        (error) => {
          console.log("Error While Fetching the User Email", error)
        }
      );
    }
  }

  userMessages(){
    if(this.UserEmail){
      this.DashDataService.userMessages(this.UserEmail).subscribe(
        (message) =>{
          this.notifications = message;
          this.unreadCount = this.notifications.filter(msg => !msg.isRead || msg.isRead.data[0] === 0).length;
        },
        (error) => {
          console.log("Error While Fetching the User Messages!");
        }
      );
    }
  }

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


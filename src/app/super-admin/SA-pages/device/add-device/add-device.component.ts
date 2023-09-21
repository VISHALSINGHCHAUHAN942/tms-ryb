import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SuperAdminService } from 'src/app/super-admin/super-admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent {
  deviceName: string = '';
  deviceIP: string = '';
  label: string = '';
  textarea: string = '';
  formData: any = {}; // Object to store form data

  constructor(private service: SuperAdminService, private snackBar: MatSnackBar) {}

  onSubmit() {
  this.service.addDevice(this.formData).subscribe(response => {
    const message = 'API Response:' + JSON.stringify(response);
     console.log(message);
    this.snackBar.open(message, 'Close',{
      duration: 5000, // Duration in milliseconds
      horizontalPosition: 'center', // Horizontal position: 'start', 'center', 'end'
      verticalPosition: 'bottom', // Vertical position: 'top', 'bottom'
    });
  });
  }


}

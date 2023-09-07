import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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

  name = new FormControl('', [Validators.required]);



}

import { Component, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-trigger-device',
  templateUrl: './trigger-device.component.html',
  styleUrls: ['./trigger-device.component.css']
})
export class TriggerDeviceComponent {
  device: any;
  threshold = new FormControl('', [Validators.required, Validators.pattern(/^\d*\.?\d+$/), Validators.min(0), Validators.max(100)]);

  @HostListener('window:resize')
  onWindowResize() {
    this.adjustDialogWidth();
  }
  private adjustDialogWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 600) {
      this.dialogRef.updateSize('90%', '');
    } else if (screenWidth <= 960) {
      this.dialogRef.updateSize('70%', '');
    } else {
      this.dialogRef.updateSize('400px', '');
    }
  }

  constructor(
    public dialogRef: MatDialogRef<TriggerDeviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.device = data.device;
  }

  ngOnInit() {
    this.adjustDialogWidth();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close();
  }
  getThresholdErrorMessage() {
    if (this.threshold.hasError('required')) {
      return 'Threshold is required';
    }
    
    if (this.threshold.hasError('pattern')) {
      return 'Not a valid number';
    }
    
    if (this.threshold.hasError('min')) {
      return 'Not less than 0';
    }
    
    if (this.threshold.hasError('max')) {
      return 'Not more than 100';
    }
    
    return '';
  }
}

import { Component, Inject } from '@angular/core';
import { SuperAdminService } from 'src/app/super-admin/super-admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-alarms',
  templateUrl: './edit-alarms.component.html',
  styleUrls: ['./edit-alarms.component.css'],
})
export class EditAlarmsComponent {
  user: any;
  AlarmForm: FormGroup;

  constructor(
    private service: SuperAdminService,
    public dialogRef: MatDialogRef<EditAlarmsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.user = { ...data.user }; // Make a copy of data.user
    console.log(this.user);

    // Initialize the form controls and validation rules
    this.AlarmForm = new FormGroup({
      TriggerValue: new FormControl(this.user.TriggerValue, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.AlarmForm.valid) {
      const updatedTriggerValue = this.AlarmForm.value.TriggerValue;
   //   const updatedAssignee = this.AlarmForm.value.assignee;

      // Update the user object with the new trigger value and assignee
      this.user.TriggerValue = updatedTriggerValue;
   //   this.user.assignee = updatedAssignee;

      // Send the updated data to the API using your service method
      this.service.updateDeviceTrigger(this.user.DeviceUID, this.user).subscribe(
        (response) => {
          // Handle the API response if needed
          console.log('API Response:', response);

          // Close the dialog after successfully updating
          this.dialogRef.close();
        },
        (error) => {
          // Handle any API error
          console.error('API Error:', error);
        }
      );
    }
  }
}

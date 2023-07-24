import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { IdialogAlert } from 'src/app/modules/projects/models/model';

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './dialog-alert.component.html',
  styleUrls: ['./dialog-alert.component.scss'],
})
export class DialogAlertComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: IdialogAlert) {}
}

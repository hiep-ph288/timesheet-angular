import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogProject } from 'src/app/modules/projects/models/model';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss']
})
export class DialogModalComponent  {

  constructor(@Inject(MAT_DIALOG_DATA) public data: IDialogProject) {}


}

import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss'],
})
export class NewClientComponent {
  constructor(private fb: FormBuilder) {}

  createNewClient = this.fb.group({
    address: ['', Validators.required],
    code: ['', Validators.required],
    name: ['', Validators.required],
  });

  onSubmit() {}
  onNoClick() {}
}

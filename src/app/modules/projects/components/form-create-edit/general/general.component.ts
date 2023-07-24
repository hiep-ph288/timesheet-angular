import {
  FormBuilder,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { ICustomer } from '../../../models/model';
import { EProjectType } from '../../../enum/projectType';
import { NewClientComponent } from './new-client/new-client.component';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  customer: Observable<ICustomer[]> = new Observable<ICustomer[]>();
  selectedType: number | null | undefined;

  form!: UntypedFormGroup;

  types = [
    EProjectType.TIME_MATERIALS,
    EProjectType.FIXED_FEE,
    EProjectType.NON_BILLABLE,
    EProjectType.ODC,
    EProjectType.PRODUCT,
    EProjectType.TRAINING,
  ];

  constructor(
    private formService: FormService,
    private customerService: CustomerService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.customer = this.customerService.getCustomerAll();
    this.form = this.formService.getFormGroup('general');
  }

  openDialog() {
    this.dialog.open(NewClientComponent, {
      width: '320px',
    });
  }
  onRadioChange($event: number): void {
    this.selectedType = $event;
  }

  submitForm() {}
}

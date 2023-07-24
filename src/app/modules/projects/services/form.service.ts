import { BehaviorSubject } from 'rxjs';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Injectable } from '@angular/core';
import { IForm, ITask } from '../models/model';
import { ProjectButton, ProjectForm } from '../enum/projectType';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private fb: FormBuilder) {}
  public editDataSubject = new BehaviorSubject<IForm | null>(null);
  public editData$ = this.editDataSubject.asObservable();

  createForm = this.fb.group({
    name: ['', Validators.required],
    code: ['', Validators.required],
    status: [0],
    timeStart: [''],
    timeEnd: [''],
    note: [''],
    projectType: [0],
    customerId: [0],
    tasks: this.fb.array<ITask[]>([]),
    users: this.fb.array([]),
    id: [0],
    projectTargetUsers: [],
    komuChannelId: [''],
    isNotifyToKomu: [false],
    isAllUserBelongTo: [true],
  });
  setFormEditData(data: IForm) {
    this.editDataSubject.next(data);
  }
}

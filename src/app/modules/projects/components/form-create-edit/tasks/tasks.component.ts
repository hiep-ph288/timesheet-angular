import { FormService } from './../../../services/form.service';
import { FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IAllTasks, ITask } from '../../../models/model';
import { TaskService } from '../../../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private formService: FormService
  ) {
    // super();
  }
  projectId: string | undefined | null;
  taskForm = this.formService.getFormArray('tasks') as FormArray;
  billableUsers: IAllTasks[] = [];
  otherUsers: IAllTasks[] = [];
  editUsers: ITask[] = [];
  deleteUser: string = 'deleteUser';
  panelOpenState: boolean = false;
  initBillableUsers: IAllTasks[] = [];
  initOtherUsers: IAllTasks[] = [];
  allTasks: IAllTasks[] = [];
  ngOnInit(): void {
    this.projectId = this.route.parent?.snapshot.paramMap.get('id');
    this.getAllTasks();
  }
  getAllTasks() {
    this.taskService.getAllTask().subscribe((tasks) => {
      this.allTasks = tasks;
      this.tasksFilter();
    });
  }
  tasksFilter() {
    if (this.projectId) {
      this.editUsers = this.taskForm?.value;
      this.allTasks.forEach((a) => {
        this.editUsers.forEach((e) => {
          if (a.id === e.taskId) {
            a.billable = e.billable;
            this.billableUsers.push(a);
          }
        });
      });
      this.otherUsers = this.allTasks.filter(
        (t) => !this.billableUsers.includes(t)
      );
    } else {
      this.billableUsers = this.allTasks.filter((task) => task.type === 0);
      this.billableUsers.forEach((t) => (t.billable = true));
      this.otherUsers = this.allTasks.filter((task) => task.type === 1);
    }
  }
  checkAllCheckBox(): boolean {
    return this.billableUsers.every((item) => item.billable === true);
  }
  setAllCheckBox() {
    const allTrue = this.billableUsers.every((item) => item.billable === true);
    this.billableUsers.forEach((item) => {
      item.billable = !allTrue;
    });
    this.taskForm.controls.forEach((item) =>
      item.get('billable')?.patchValue(!allTrue)
    );
  }
  isCompleted(id: number, value: boolean) {
    const index = this.billableUsers.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.billableUsers[index].billable = value;
      const checked = this.taskForm.controls.find(
        (task) => task.get('taskId')?.value === id
      );
      checked?.patchValue({ billable: value });
    }
  }

  onSelected(id: number, action: string) {
    const index = this.billableUsers.findIndex((item) => item.id === id);
    const user = this.billableUsers.find((item) => item.id === id);
    if (action === this.deleteUser) {
      if (index !== -1 && user) {
        this.billableUsers.splice(index, 1);
        this.otherUsers.push(user);
        this.taskForm.removeAt(
          this.taskForm.controls.findIndex(
            (control) => control.get('taskId')?.value === id
          )
        );
      }
    } else {
      const indexOther = this.otherUsers.findIndex((i) => i.id === id);
      const user = this.otherUsers.find((item) => item.id === id);
      if (indexOther !== -1 && user) {
        this.otherUsers.splice(indexOther, 1);
        user.billable = true;
        this.billableUsers.push(user);
        this.taskForm.push(
          this.fb.group({
            taskId: user.id,
            billable: true,
          })
        );
      }
    }
  }
}

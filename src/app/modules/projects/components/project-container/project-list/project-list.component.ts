import { ProjectService } from './../../../services/project.service';
import { ProjectOptions } from './../../../enum/projectOptions';
import { MatDialog } from '@angular/material/dialog';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { IProjectUserData } from '../../../models/model';
import { Router } from '@angular/router';
import { NotificationService } from '../../../services/notification.service';
import { DialogModalComponent } from 'src/app/shared/components/dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  @Input() searchInput: string = '';
  @Input() isLoading: boolean = false;
  @Input() projectsData!: IProjectUserData[];

  @Output() isActionChange = new EventEmitter();

  projectOptions = ProjectOptions;
  delete: number = 3;
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private notification: NotificationService,
    private projectService: ProjectService
  ) {}

  openEditPage(id: number) {
    this.router.navigate([`app/main/edit/${id}`]);
  }

  openDialog(id: number, action: number, projectName: string) {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      data: { action: action, projectName },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (action === this.projectOptions.Deactive) {
          this.onDeactive(id, action);
        } else if (action === this.projectOptions.Active) {
          this.onActive(id, action);
        } else if (action === this.delete) {
          this.onDelete(id, action);
        }
      }
    });
  }

  onActive(id: number, action: number) {
    this.projectService.activeProject(id).subscribe(
      () => {
        this.isActionChange.emit();
        this.notification.showSuccess('Active Success');
      },
      () => {
        () => {
          this.notification.showError('Active Fail');
        };
      }
    );
  }
  onDeactive(id: number, action: number) {
    this.projectService.deactiveProject(id).subscribe(() => {
      this.isActionChange.emit();
      this.notification.showSuccess('Deactive Success');
    });
  }
  onDelete(id: number, action: number) {
    this.projectService.deleteProject(id).subscribe(
      () => {
        this.isActionChange.emit();
        this.notification.showSuccess('Delete Success');
      },
      () => {
        this.notification.showError('Delete Fail');
      }
    );
  }
}

/* eslint-disable indent */
import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProjectOptions } from '../../enum/projectOptions';
import { IProjectUserData } from '../../models/model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.scss'],
})
export class ProjectContainerComponent implements OnInit {
  selected: number = ProjectOptions.Active;
  private active: number = 0;
  private deactive: number = 0;
  searchInput: string = '';
  private all!: number;
  private projectOption = ProjectOptions;
  searchInputForm = new FormControl('');

  projectData: IProjectUserData[] = [];

  setProjectData(data: IProjectUserData[]) {
    this.projectData = data;
  }

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  setIsLoading(value: boolean) {
    this.isLoadingSubject.next(value);
  }

  set isLoading(value: boolean) {
    this.isLoadingSubject.next(value);
  }
  get isLoading(): boolean {
    return this.isLoadingSubject.value;
  }

  constructor(private projectService: ProjectService, private router: Router) {}
  ngOnInit(): void {
    this.getData(this.selected, this.searchInput);
    this.getQuantityProject();
  }
  options = [
    {
      value: ProjectOptions.Active,
      label: 'Active Projects',
      count: this.active,
    },
    {
      value: ProjectOptions.Deactive,
      label: 'Deactive Projects',
      count: this.deactive,
    },
    { value: ProjectOptions.All, label: 'All Projects', count: this.all },
  ];

  public getData(status: number, searchInput: string) {
    this.setIsLoading(true);
    this.setProjectData([]);
    this.projectService
      .getProject(status, `${searchInput}`)
      .subscribe((response) => {
        this.setIsLoading(false);
        this.setProjectData(response);
      });
  }

  selectedChange() {
    switch (this.selected) {
      case ProjectOptions.Active:
        this.getData(this.selected, this.searchInput);
        this.getQuantityProject();
        break;
      case ProjectOptions.Deactive:
        this.getData(this.selected, this.searchInput);
        break;
      case ProjectOptions.All:
        this.getData(this.selected, this.searchInput);
        break;
      default:
        break;
    }
  }
  getQuantityProject() {
    this.projectService.getQuantityProject().subscribe((data) => {
      this.deactive = data[1]?.quantity ?? 0;
      this.active = data[0]?.quantity ?? 0;
      this.all = this.active + this.deactive;
      this.updateOptions();
    });
  }

  updateOptions() {
    this.options = [
      {
        value: ProjectOptions.Active,
        label: 'Active Projects',
        count: this.active,
      },
      {
        value: ProjectOptions.Deactive,
        label: 'Deactive Projects',
        count: this.deactive,
      },
      { value: ProjectOptions.All, label: 'All Projects', count: this.all },
    ];
  }
  refreshData() {
    this.selectedChange();
  }

  onSearch() {
    this.searchInput = this.searchInputForm.value ?? '';
    if (this.selected === this.projectOption.Active) {
      this.getData(this.selected, this.searchInput);
    } else if (this.selected === this.projectOption.Deactive) {
      this.getData(this.selected, this.searchInput);
    } else {
      this.getData(this.selected, this.searchInput);
    }
    this.getQuantityProject();
  }

  openDialog() {
    this.router.navigate(['app/main/create/']);
  }
}

import { FormService } from './../../../services/form.service';
import { IBranchFilter, IUser } from './../../../models/model';
import { Component, OnInit } from '@angular/core';
import { BranchService } from '../../../services/branch.service';
import { FilterMember, Membertype } from '../../../enum/projectType';
import { UserService } from '../../../services/user.service';
import { BehaviorSubject, take, takeUntil } from 'rxjs';
import { Unsub } from 'src/app/shared/unsub/unsub.class';
import { ActivatedRoute } from '@angular/router';
import { projectTeamType } from '../../../enum/projectTeamType';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent extends Unsub implements OnInit {
  panelOpenState: boolean = false;

  branchFilter: IBranchFilter[] = [];
  selectedBranch: number = 1;

  filterTypes: FilterMember[] = [
    {
      value: 'All',
      type: Membertype.ALL,
    },
    {
      value: 'Staff',
      type: Membertype.STAFF,
    },
    {
      value: 'Internship',
      type: Membertype.INTERNSHIP,
    },
    {
      value: 'Collaborator',
      type: Membertype.COLLABORATOR,
    },
  ];

  selectedType: number = 3;

  searchInput: string = '';

  projectId!: string | undefined | null;

  users: IUser[] = [];
  filteredUsers: IUser[] = [];

  activeUsers: IUser[] = [];
  searchInputTeam: string = '';

  selectedTeamType = [
    projectTeamType.member,
    projectTeamType.ProjectManager,
    projectTeamType.Shadow,
    projectTeamType.Deactive,
  ];
  teamTypeNames = ['Member', 'ProjectManager', 'Shadow', 'Deactive'];
  checked = false;

  constructor(
    private branchService: BranchService,
    private useService: UserService,
    private route: ActivatedRoute,
    formService: FormService
  ) {
    super();
  }

  ngOnInit(): void {
    this.projectId = this.route.parent?.snapshot.paramMap.get('id');
    this.getUsers();
    this.getBranchFilter();
  }

  getBranchFilter() {
    this.branchService.getAllBranchFilter().subscribe((response) => {
      this.branchFilter = response;
    });
  }

  onSelectedUser($event: number): void {
    this.selectedBranch = $event;
    this.filteredUsers = this.selectedBranch
      ? this.users.filter((user) => user.branchId === this.selectedBranch)
      : this.users;
  }
  onSelectedType($event: number): void {
    this.selectedType = $event;
    if (this.selectedType !== 3)
      this.filteredUsers = this.users.filter(
        (user) => user.type === this.selectedType
      );
    else {
      this.filteredUsers = this.users;
    }
  }

  getUsers() {
    this.useService
      .getUser()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.users = this.filteredUsers = data;
        if (this.projectId) {
          this.users = this.filteredUsers = data;
          data.forEach((user) => {
            this.formService.editData$
              .pipe(takeUntil(this.unsubcribe$))
              .subscribe((editValue) => {
                editValue?.users!.forEach((editValueData: IUserEdit) => {
                  if (user.id === editValueData.userId) {
                    user.userPosition = editValueData.type;
                    this.activeUsers.push(user);
                    this.filteredUsers = this.filteredUsers.filter(
                      (user) => user.id !== editValueData.userId
                    );
                  }
                });
              });
          });
        } else {
          this.users = this.filteredUsers = data;
        }
      });
  }

  selectedUserActive(id: number, action: string) {}
  selectedChange(event: number, id: number) {}
}

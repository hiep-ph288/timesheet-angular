export interface IProjectUserData {
  activeMember: string;
  code: string;
  customerName: string;
  id: number;
  name: string;
  pms: string[];
  projectType: number;
  status: number;
  timeEnd: string;
  timeStart: string;
}
export interface IQuantity {
  status: number;
  quantity: number;
  [index: number]: IQuantity;
}

export interface IDialogProject {
  action: string;
  projectName: string;
}

//All Customer
export interface ICustomer {
  name: string;
  id: number;
}
export interface IForm {
  code: string;
  customerId: number | undefined;
  id: number;
  isAllUserBelongTo: false;
  isNotifyToKomu: true;
  komuChannelId: string;
  name: string;
  note: string;
  projectTargetUsers: [];
  projectType: number | undefined;
  status: number;
  tasks: [];
  users: [];
}

export interface ITask {
  billable: boolean | undefined;
  id: number;
  taskId: number;
}
export interface IForm {
  code: string;
  customerId: number | undefined;
  id: number;
  isAllUserBelongTo: false;
  isNotifyToKomu: true;
  komuChannelId: string;
  name: string;
  note: string;
  projectTargetUsers: [];
  projectType: number | undefined;
  status: number;
  tasks: [];
  users: [];
}
export interface IUserEdit {
  id: number;
  type: number;
  userId: number;
}
export interface IAllTasks {
  name: 'string';
  type: number;
  isDeleted: boolean;
  id: number;
  billable?: boolean;
}

export interface IdialogAlert {
  title: string;
  icon: string;
  message: string;
}
export interface IUser {
  name: string;
  emailAddress: string;
  isActive: true;
  type: number;
  jobTitle: string;
  level: number;
  userCode: string;
  avatarPath: string;
  avatarFullPath: string;
  branch: number;
  branchColor: string;
  branchDisplayName: string;
  branchId: number;
  id: number;
  userPosition?: number;
}

export interface ITaskView {
  taskId: 0;
  taskName: 'string';
  totalWorkingTime: 0;
  billableWorkingTime: 0;
  billable: true;
}

export interface IBranchFilter {
  name: string;
  displayName: string;
  id: number;
}

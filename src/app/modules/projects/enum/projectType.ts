export enum EProjectType {
  TIME_MATERIALS = 0,
  FIXED_FEE = 1,
  NON_BILLABLE = 2,
  ODC = 3,
  PRODUCT = 4,
  TRAINING = 5,
}

export enum ProjectButton {
  TimeMaterials,
  FixedFee,
  NonBillable,
  ODC,
  Product,
  Training,
}

export enum Membertype {
  ALL = 3,
  STAFF = 0,
  INTERNSHIP = 1,
  COLLABORATOR = 2,
}

export interface FilterMember {
  value: string;
  type: Membertype;
}

export interface FormTeam {
  id: number;
  userId: number;
  type: number;
}

export interface FormTask {
  taskId: number;
  billable: boolean;
}

export interface ProjectForm {
  id: number;
  customerId: number;
  name: string;
  code: string;
  timeStart: string;
  timeEnd: string;
  note: string;
  isAllUserBelongTo: boolean;
  projectType: ProjectButton;
  tasks: FormTask[];
  users: FormTeam[];
  isNotifyToKomu: boolean;
  komuChannelId: string;
  status?: number;
}

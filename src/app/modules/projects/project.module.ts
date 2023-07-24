import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './components/project-container/project-list/project-list.component';
import { ShareModule } from 'src/app/shared/share.module';
import { RouterModule } from '@angular/router';

import { GroupDataPipe } from './pipes/group-data.pipe';
import { ProtypePipe } from './pipes/protype.pipe';
import { IsActivePipe } from './pipes/is-active.pipe';
import { ProjectsRoutingModule } from './project-routing.module';
import { ProjectContainerComponent } from './components/project-container/project-container.component';
import { SearchingPipe } from './pipes/searching.pipe';
import { ViewComponent } from './components/view/view.component';
import { FormCreateEditComponent } from './components/form-create-edit/form-create-edit.component';
import { GeneralComponent } from './components/form-create-edit/general/general.component';
import { TasksComponent } from './components/form-create-edit/tasks/tasks.component';
import { TeamComponent } from './components/form-create-edit/team/team.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { NewClientComponent } from './components/form-create-edit/general/new-client/new-client.component';
import { BranchPipe } from './pipes/branch.pipe';
import { ListTypePipe } from './pipes/list-type.pipe';
import { TypeLevelPipe } from './pipes/type-level.pipe';

@NgModule({
  declarations: [
    ProjectListComponent,
    GroupDataPipe,
    ProtypePipe,
    IsActivePipe,
    ProjectContainerComponent,
    SearchingPipe,
    ViewComponent,
    FormCreateEditComponent,
    GeneralComponent,
    TasksComponent,
    TeamComponent,
    DateFormatPipe,
    NewClientComponent,
    BranchPipe,
    ListTypePipe,
    TypeLevelPipe,
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule,
    ProjectsRoutingModule,
  ],
})
export class ProjectModule {}

import { TasksComponent } from './components/form-create-edit/tasks/tasks.component';
import { TeamComponent } from './components/form-create-edit/team/team.component';
import { GeneralComponent } from './components/form-create-edit/general/general.component';
import { FormCreateEditComponent } from './components/form-create-edit/form-create-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectContainerComponent } from './components/project-container/project-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },

  { path: 'projects', component: ProjectContainerComponent },
  {
    path: 'edit/:id',
    component: FormCreateEditComponent,
    children: [
      { path: '', redirectTo: 'General', pathMatch: 'full' },

      { path: 'General', component: GeneralComponent },
      {
        path: 'Team',
        component: TeamComponent,
      },
      {
        path: 'Tasks',
        component: TasksComponent,
      },
    ],
  },

  {
    path: 'create',
    component: FormCreateEditComponent,
    children: [
      { path: '', redirectTo: 'General', pathMatch: 'full' },

      { path: 'General', component: GeneralComponent },
      {
        path: 'Team',
        component: TeamComponent,
      },
      {
        path: 'Tasks',
        component: TasksComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}

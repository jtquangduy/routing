import { Route } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';

export const routes: Route[] = [
  {
    path: '', // <your-domain>/
    component: NoTaskComponent,
  },
  {
    path: 'tasks', // <your-domain>/task
    component: TasksComponent,
  },
];

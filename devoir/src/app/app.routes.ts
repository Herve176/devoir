import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
{path:'',component:TaskListComponent},
{path:'addtask',component:AddTaskComponent}
];

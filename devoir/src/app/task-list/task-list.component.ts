import { Component, Input } from '@angular/core';
import { Tasklist } from '../models/task-list.models';
import { CommonModule } from '@angular/common';
import { TaskComponent } from "../task/task.component";
@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.scss',
    imports: [CommonModule, TaskComponent]
})
export class TaskListComponent {

[x: string]: any;

@Input()tasklists!: Tasklist[];


}

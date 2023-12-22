import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Tasklist } from './models/task-list.models';
import { AddTask } from './models/add-task.models';
import { TaskListComponent } from "./task-list/task-list.component";
import { AddTaskComponent } from "./add-task/add-task.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, TaskListComponent, AddTaskComponent]
})
export class AppComponent {
  tasklist!:Tasklist;
  addtask!:AddTask;
  ngOnInit(){
    this.tasklist=new Tasklist(
      5,
      'just a title',
      true
    );
  }
}

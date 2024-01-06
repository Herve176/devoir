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
  tasklist!:Tasklist[];

  ngOnInit(){
    this.tasklist=[
  {
      id:5,
      title: 'just a title',
      completed:true
    },
  {
      id:6,
      title:'title',
      completed:false
    },
  {
      id:7,
      title:'hii',
      completed:false
    },
  {
      id:8,
      title:'crack',
      completed:true
    },
  ];
  }
}

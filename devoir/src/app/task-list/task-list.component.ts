import { Component, OnInit, Input } from '@angular/core';
import { Tasklist } from '../models/task-list.models';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

@Input()tasklists!: Tasklist[];

ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

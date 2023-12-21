import { Component,OnInit,Input } from '@angular/core';
import { Tasklist } from '../models/task-list.models';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @Input()tasklist!:Tasklist
  ngOnInit(){}
}

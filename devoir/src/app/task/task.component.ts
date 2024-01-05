import { Component , Input } from '@angular/core';
import { Task } from '../models/task.models';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent  {
  @Input()task!:Task;

}

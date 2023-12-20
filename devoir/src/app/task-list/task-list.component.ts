import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  id!: number;
  title!: string;
  completed!: boolean;
  ngOnInit(){
    this.id= 0;
    this.title='here is the first title!';
    this.completed=true;
  }
}

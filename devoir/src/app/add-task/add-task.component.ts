import { Component, OnInit, Input } from '@angular/core';
import { AddTask } from '../models/add-task.models';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit{
title!: string;
id!: number;
completed!: boolean;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() addtask!:AddTask;

}

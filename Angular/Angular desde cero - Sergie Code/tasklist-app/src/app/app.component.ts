import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from './services/tasks.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  tasksList: string[] = [];
  newTask: string = '';

  private _tasksService = inject(TasksService);

  ngOnInit(): void {
    this.tasksList = this._tasksService.getTasks();
  }

  addTask() {
    this._tasksService.addTask(this.newTask);
    this.newTask = '';
    this.tasksList = this._tasksService.getTasks();
  }

  deleteTask(index: number) {
    this._tasksService.deleteTask(index);
    this.tasksList = this._tasksService.getTasks();
  }
}

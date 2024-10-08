import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private localStorageKey = 'taskList';

  getTasks(): string[] {
    return (
      JSON.parse(localStorage.getItem(this.localStorageKey) as string) || []
    );
  }

  addTask(task: string) {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }

  deleteTask(index: number) {
    const tasks = this.getTasks();
    tasks.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }
}

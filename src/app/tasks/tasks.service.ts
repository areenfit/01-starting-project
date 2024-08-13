import { Injectable } from '@angular/core';
import { newTask } from './new-task/new-task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  }[] = [];

  constructor() {
    this.initTasks();
  }
  initTasks() {
    const obj = localStorage.getItem('tasks');

    if (obj) {
      this.tasks = JSON.parse(obj);
    }
  }

  getUserTask(userId: string) {
    console.log(userId);
    console.log(this.tasks);
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: newTask, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

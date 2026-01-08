import { Injectable } from '@angular/core';
import { NewTaskData } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {  
  
  private tasks = [
    { 
      id: 't1',
      userId: 'u1',    
      title: 'Task 1',
      summary: 'Buidling EasyTask App',
      dueDate: new Date('2024-07-01'),
    },
    { 
      id: 't2',
      userId: 'u2',      
      title: 'Task 2',
      summary: 'Testing EasyTask App',
      dueDate: new Date('2024-08-15'),
    },
    {
      id: 't3',
      userId: 'u3',       
      title: 'Task 3',
      summary: 'Deploying EasyTask App',
      dueDate: new Date('2024-09-30'),
    }
  ] ;

  constructor( ) { 
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }


  getUserTasks(udserId: string) {
    return this.tasks.filter(task => task.userId === udserId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    const newTask = {
      id: this.generateNewTaskId(),   
      userId: userId,   
      title: taskData.title,
      summary: taskData.summary,
      dueDate: new Date(taskData.date)
    };
    this.tasks.push(newTask);
    console.log('New Task Added:', newTask);
    this.saveTasks();
  }
  
  
  generateNewTaskId(): string {
    let newId: string;

    do {
      newId = Math.random().toString(36).substr(2, 9); // random 9-char string
    } while (this.tasks.some(task => task.id === newId));

    return newId;
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => {
      console.log('Task completed with ID:', taskId);
      return task.id !== taskId;    
    });
    this.saveTasks();
  }

  
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from "../new-task/new-task.component";
import { type NewTaskData } from '../../models/task.interface';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  constructor(private tasksService: TasksService) {

  }

  // this ? makes the input optional
  @Input({required: true}) userId!: string;  
  @Input({required: true}) name!: string;
  isAddingTask = false;
  

  

  // Every time Angular checks the template, it calls this getter.
  // This dynamically returns only the tasks for the current user (this.userId).
  get selectedUserTasks() { 
      return this.tasksService.getUserTasks(this.userId);      
  }
  
  

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  

  // onAddTask(taskData: NewTaskData) {
  //   // if need to push to begin of the array use unshift instead of push.
  //   const newTask = {
  //     id: this.generateNewTaskId(),   
  //     userId: this.userId,   
  //     title: taskData.title,
  //     summary: taskData.summary,
  //     dueDate: new Date(taskData.date)
  //   }
  //   console.log('New Task Added:', newTask);
    
  //   this.tasks.push(newTask);
  //   this.isAddingTask = false;
  // }

  onCancelTask() {
    console.log('is adding task false');    
    this.isAddingTask = false;
  }

  


  // filter creates a new array containing only the elements for which the callback returns true
  // The callback must return a boolean (true or false) for each elemen
  // If you don’t return anything, the callback returns undefined by default.
  // undefined is treated as false, so that element gets removed. means the app-task gets removed.
  // onCompleteTask(taskId: string) {    
  //   this.tasks = this.tasks.filter((task) => {
  //     console.log('Task completed with ID:', taskId);
  //     return task.id !== taskId;    
  //   });
  // }

}

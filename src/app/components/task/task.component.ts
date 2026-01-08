import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.interface';
import { CardComponent } from "../shared/card/card.component";
import { TasksService } from '../../services/tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})

export class TaskComponent {
  @Input() name?: string;
  @Input({required: true}) task!: Task;    
  @Output() taskCompleted = new EventEmitter<string>();

  constructor(private tasksService: TasksService) {     
  }

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
  
}

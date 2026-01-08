import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { type NewTaskData } from '../../models/task.interface';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})

export class NewTaskComponent {
  @Input ({required: true}) userId!: string;
  @Output() close = new EventEmitter<string>();
  @Output() newTaskAdded = new EventEmitter<string>();
  @Output() cancelTask = new EventEmitter<void>();
  

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  private tasksService = inject(TasksService);
  

  onCancel() {    
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    }, this.userId); // assuming 'u1' is the current user ID for demonstration
    // this.add.emit({
    //   title: this.enteredTitle(),
    //   summary: this.enteredSummary(),
    //   date: this.enteredDate()
    // })
    this.close.emit();
  }

}

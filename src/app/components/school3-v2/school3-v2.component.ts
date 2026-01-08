import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-school3-v2',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './school3-v2.component.html',
  styleUrl: './school3-v2.component.scss',
})
export class School3V2Component {  
  modelPet = { id: '', name: '' };
  byId = (a: any, b: any) => a?.id === b?.id;

  model = { name: '', email: '', size: '' };
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}

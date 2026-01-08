import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { School3Component } from './components/school3/school3.component';
import { School3V2Component } from './components/school3-v2/school3-v2.component';
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, UserComponent, School3V2Component, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EasyTask-app';

  users = DUMMY_USERS;
  selectedUserId?: string;

  // This defines a computed property.
  get selectedUser() {
    // if find dont get a match, the ! operator will throw an error
    // console.log('Finding user with ID:', this.selectedUserId);
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(userId: string) {    
    this.selectedUserId = userId;
    // console.log('Selected user ID:', userId);
    // console.log('Selected user name:', userId);
  }
}

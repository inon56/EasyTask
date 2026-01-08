import { Component, computed, Input, Output, EventEmitter, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.interface';
import { CardComponent } from '../shared/card/card.component';


const randomIndex = Math.floor(Math.random() * 6);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return computed(() => `assets/users/${this.user.avatar}`);
  }

  onSelectUser() {
    this.select.emit(this.user.id);
    // const newIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[newIndex]);
  }
}



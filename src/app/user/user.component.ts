import {
  Component,
  Input,
  // input,
  // computed,
  output,
  Output,
  EventEmitter,
  input,
} from '@angular/core';
import { type User } from './user.model';
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  //Signals !!

  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  // onSelectUser() {
  //   this.select.emit(this.id);
  // }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

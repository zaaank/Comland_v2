import { Component, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: Signal<User[]>;
  constructor(private userService: UserService) {
    this.users = this.userService.users;
  }

  ngOnInit(): void {
  }

  deleteUser(index: number) {
    this.userService.deleteUser(index);
  }
}

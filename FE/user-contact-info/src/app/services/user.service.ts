import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _users = signal<User[]>([]);
  private _nextId = 1;

  get users() {
    return this._users;
  }

  addUser(user: Omit<User, 'id'>) {
    const newUser: User = {
      id: this._nextId++,
      ...user
    };
    this._users.update(users => [...users, newUser]);
  }

  deleteUser(id: number) {
    this._users.update(users => users.filter((val) => val.id !== id));
  }
}

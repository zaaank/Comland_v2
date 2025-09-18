import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  private _users = signal<User[]>([]);

  constructor(private http: HttpClient) { }

  get users() {
    return this._users;
  }

  // Fetch next id from backend
  addUser(user: Omit<User, 'id'>) {
    this.http.get<number>(`${environment.apiBaseUrl}/user/next-id`).subscribe({
      next: (nextId) => {
        const newUser: User = {
          id: nextId,
          ...user
        };

        this._users.update(users => [...users, newUser]);
      },
      error: (err) => {
        console.error('Error fetching next user ID:', err);
        // Here it would be good to show some alert to users or error msg...
      }
    });
  }

  deleteUser(id: number) {
    this._users.update(users => users.filter(user => user.id !== id));
  }
}

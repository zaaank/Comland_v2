import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['male', Validators.required],
      email: ['', [Validators.email]],
      telephone: [
        '',
        [
          //This works for 9 numbers, with spaces or with dashes or just written together
          Validators.pattern(/^(\d[\d\s-]{7,14}\d)$/)
        ]
      ]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      this.userService.addUser(user);
      this.userForm.reset({ gender: 'male' });
    }
  }

  resetForm() {
    this.userForm.reset({ gender: 'male' });
  }

  get name() { return this.userForm.get('name'); }
  get email() { return this.userForm.get('email'); }
  get telephone() { return this.userForm.get('telephone'); }
}

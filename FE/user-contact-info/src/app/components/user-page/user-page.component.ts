import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  imports: [CommonModule, UserFormComponent, UserListComponent],
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { UsersService } from '../../shared/services/users.service';
import { MessageComponent } from './message/message.component';
import { User } from '../../shared/models/user';

@Component({
  selector: 'pa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInfo: User = {
    id: -1,
    username: '',
    password: ''
  };
  usersList: User[];
  messageComponent: MessageComponent;
  errorMessage = {
    error: `Wrong username or password`,
    toDo: `Try again`
  };
  constructor(
      private userService: UsersService,
      public router: Router,
      public snackBarMessage: MatSnackBar) {

    this.usersList = this.userService.getUsers();
    this.messageComponent = new MessageComponent(snackBarMessage);
  }

  ngOnInit() {
  }
  verifyCredentials(): void {
    let foundUser;
    const currentUser = this.userInfo;
    foundUser = this.usersList.find( user => {
      return currentUser.username === user.username && currentUser.password === user.password;
    });
    if (foundUser !== undefined) {
      this.router.navigate(['/dashboard', foundUser.id ]);
      return;
    }
    this.messageComponent.onMessageSnackBar(this.errorMessage.error, this.errorMessage.toDo);
  }
}

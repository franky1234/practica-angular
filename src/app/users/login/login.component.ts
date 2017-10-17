import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UsersService } from '../../shared/services/users.service';
import { Router } from '@angular/router';


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

  constructor(private userService: UsersService, public router: Router ) {
    this.usersList = this.userService.getUsers();
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
  }
}

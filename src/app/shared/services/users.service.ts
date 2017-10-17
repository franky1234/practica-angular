import { Injectable } from '@angular/core';
import { User } from '../models/user';


@Injectable()
export class UsersService {

  users: User[] = [
    { id: 0, username: 'franklin', password: 'franklin'},
    { id: 1, username: 'roger', password: 'roger'},
    { id: 2, username: 'noemi', password: 'noemi'}
  ];
  constructor() { }

  getUsers(): User[] {
    return this.users;
  }
  getUser( id ): User {
    return this.users.find(user => user.id === id );
  }
}

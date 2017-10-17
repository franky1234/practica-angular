import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user';


@Component({
  selector: 'pa-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.user = this.userService.getUser(+params.get('id'));
    });
  }
  goBackLogin(): void {
    this.location.back();
  }
  getFirstLetter(): string {
    return this.user.username.charAt(0).toUpperCase();
  }
}

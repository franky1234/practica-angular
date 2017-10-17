import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';
import { UsersService } from '../shared/services/users.service';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './login/message/message.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  declarations: [LoginComponent, DashboardComponent, MessageComponent, RegisterComponent],
  providers: [UsersService]
})
export class UsersModule { }

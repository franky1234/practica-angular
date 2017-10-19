import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { PageNotFoundComponent } from './not-found/page-not-found/page-not-found.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { RegisterComponent } from './users/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

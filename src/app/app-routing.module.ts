import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import {  UserResolver } from './user-resolver';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'user', component: UserComponent, resolve: {user: UserResolver} },
  {path: 'user-list', component: UserListComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

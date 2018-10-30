import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import UserListComponent
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
// add more imports
import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/users/list', pathMatch: 'full'},
  {path: 'users/list', component: UserListComponent},
  // want the detail of this dude, so we use :id
  {path: 'users/detail/:id', component: UserDetailComponent},
  {path: 'users/create', component: UserCreateComponent},
  {path: 'users/edit/:id', component: UserEditComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

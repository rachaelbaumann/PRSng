import { Component, OnInit } from '@angular/core';
// import things:
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // define an array of users of type User
  users: User[];

  // inject UserService
  constructor(private usersvc: UserService) { }

  ngOnInit() {
    this.usersvc.list().subscribe(resp => {
      console.log("Users: ", resp.data);
      // this displays the data
      this.users = resp.data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
// imports:
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  // create instance of an EMPTY user
  user: User = new User();

   // save things
   save(): void {
    this.usersvc.add(this.user).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/users/list');
    });
  }

  constructor(
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}

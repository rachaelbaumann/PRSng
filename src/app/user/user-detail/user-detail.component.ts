import { Component, OnInit } from '@angular/core';
// import this
import { SystemService } from '../../system/system.service';
import { ActivatedRoute, Router } from '@angular/router'; // reads parameters stored
// import UserService
import { UserService } from '../user.service';
// import User class
import { User } from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {
  // need a property to hold a single user
  user : User;

  // add delete fucntion
  delete(): void {
    this.usersvc.remove(this.user).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/users/list');
    });
  }

  // add to constructor
  constructor(
    private sys: SystemService,
    private route: ActivatedRoute, 
    private usersvc: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    // add this to ngOnInit.... ugh!
    // gets the :id from the router
    let id = this.route.snapshot.params.id; // must be same id as in routing-module
    // get the user from the user service
    this.usersvc.get(id).subscribe(resp => {
      console.log("response: ", resp);
      this.user = resp.data;
    });
  }

}

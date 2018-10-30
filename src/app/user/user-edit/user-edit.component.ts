import { Component, OnInit } from '@angular/core';
// import:
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  // create an instance of user
  user: User;

  // save things
  save(): void {
    this.usersvc.change(this.user).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/users/list');
    });
  }

  // inject imports into contsrtuctor
  constructor(
    private usersvc: UserService, private route: ActivatedRoute, private router: Router
  ) { }

  // add to ngOnInit
  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(resp => {
      console.log("response: ", resp);
      this.user = resp.data;
    })
  }

}

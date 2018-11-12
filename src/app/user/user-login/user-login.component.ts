import { Component, OnInit } from '@angular/core';
// add imports
import { Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { UserService } from '../user.service';
import { User } from '../user.class';
// import { JsonResponse } from '../../util/json-response.class';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();
  msg: string = '';

  login(): void {
    this.syssvc.clear();
    this.usersvc.login(this.user.userName, this.user.password)
      .subscribe(resp => {
        this.msg = '';
        console.log("Login Resp:", resp);
        if(resp.code == '0') {
          this.syssvc.user = resp.data;
          this.router.navigateByUrl('/home');
        }
        this.msg = resp.message;
      });
  }


  constructor(
    private syssvc: SystemService,
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user.userName = 'rbaumann';
    this.user.password = 'queen';
  }

}

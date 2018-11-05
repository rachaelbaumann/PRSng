import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  private baseUrl = 'http://localhost:54401/';
  get ServerUrl() { return this.baseUrl; }

  private user1 : User = null;
  get user() { return this.user1  ; }
  set user(user: User) { this.user1  = user; }
  get isLoggedIn() { return this.user1   != null; }
  clear(): void {
    this.user = null;
  }

  checkForLogin() {
    if(!this.isLoggedIn) {
      console.warn("CheckForLogin()");
      this.router.navigateByUrl("/users/login");
    }
  }

  constructor(
    private router: Router
  ) { }
}

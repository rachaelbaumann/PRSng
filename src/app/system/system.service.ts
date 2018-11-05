import { Injectable } from '@angular/core';
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

  constructor() { }
}

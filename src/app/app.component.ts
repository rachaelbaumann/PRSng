// add OnInit to import
import { Component } from '@angular/core';
// import UserService:
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PRSng';

  // add ngOnInit
  // ngOnInit() {
  //   this.usersvc.list().subscribe(res => {
  //     console.log(res);
  //   });
  // }
 
  // add constructor
  // constructor(private usersvc: UserService) {}
  constructor(user: UserService) {
    user.list().subscribe(resp => {console.log(resp);
    });
  }
}

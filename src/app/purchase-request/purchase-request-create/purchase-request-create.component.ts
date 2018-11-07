import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SystemService } from '../../system/system.service';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-purchase-request-create',
  templateUrl: './purchase-request-create.component.html',
  styleUrls: ['./purchase-request-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {

  pr: PurchaseRequest = new PurchaseRequest();
  users: User[];
  user: User = null;

  save(): void {
    this.prsvc.add(this.pr).subscribe(resp => {
      console.log("Response: ", resp);
      this.router.navigateByUrl('/prs/list');
    });
  }

  constructor(
    private sys: SystemService,
    private prsvc: PurchaseRequestService,
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    // this.pr.userId = this.sys.user.ID;

  //   this.prsvc.list().subscribe(resp => {
  //     console.log("Requests: ", resp.data);
  //     this.pr = resp.data;
  // });

  // this.usersvc.list().subscribe(resp => {
  //   console.log("Requests: ", resp.data);
  //   this.users = resp.data;
  // });
  }

}

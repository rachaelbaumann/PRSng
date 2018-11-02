import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  user: User[];

  save(): void {
    this.prsvc.add(this.pr).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/purchaserequests/list');
    });
  }

  constructor(
    private prsvc: PurchaseRequestService,
    private usersvc: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.prsvc.list().subscribe(resp => {
      console.log("Requests: ", resp.data);
      this.pr = resp.data;
  });

  this.usersvc.list().subscribe(resp => {
    console.log("Requests: ", resp.data);
    this.user = resp.data;
  });
  }

}

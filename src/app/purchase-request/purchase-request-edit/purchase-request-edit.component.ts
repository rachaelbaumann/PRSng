import { Component, OnInit } from '@angular/core';
// import:
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-purchase-request-edit',
  templateUrl: './purchase-request-edit.component.html',
  styleUrls: ['./purchase-request-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {

  pr: PurchaseRequest;
  users: User[];

  save(): void {
    this.prsvc.change(this.pr).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/PurchaseRequests/list');
    });
  }

  compareFn(v1, v2) {
    return v1.id === v2.id;
  }

  constructor(
    private prsvc: PurchaseRequestService, 
    private usersvc: UserService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.prsvc.get(id).subscribe(resp => {
      console.log("response: ", resp);
      this.pr = resp.data;
  });

  this.usersvc.list().subscribe(resp => {
    console.log("response: ", resp);
    this.users = resp.data;
  });
  }

}

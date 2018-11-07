import { Component, OnInit } from '@angular/core';
// import this
import { SystemService } from '../../system/system.service';
import { ActivatedRoute, Router } from '@angular/router'; // reads parameters stored
// import PurchaseRequestService
import { PurchaseRequestService } from '../purchase-request.service';
// import PurchaseRequest class
import { PurchaseRequest } from '../purchase-request.class';

@Component({
  selector: 'app-purchase-request-detail',
  templateUrl: './purchase-request-detail.component.html',
  styleUrls: ['./purchase-request-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {

  pr: PurchaseRequest;

  delete(): void {
    this.prsvc.remove(this.pr).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/prs/list');
    });
  }

  constructor(
    private sys: SystemService,
    private route: ActivatedRoute, 
    private prsvc: PurchaseRequestService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.sys.checkForLogin();
    let id = this.route.snapshot.params.id; // must be same id as in routing-module
    this.prsvc.get(id).subscribe(resp => {
      console.log("response: ", resp);
      this.pr = resp.data;
    });
  }

}

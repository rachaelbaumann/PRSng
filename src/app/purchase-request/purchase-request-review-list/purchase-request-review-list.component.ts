import { Component, OnInit } from '@angular/core';
// import
import { SystemService } from '../../system/system.service';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';

@Component({
  selector: 'app-purchase-request-review-list',
  templateUrl: './purchase-request-review-list.component.html',
  styleUrls: ['./purchase-request-review-list.component.css']
})
export class PurchaseRequestReviewListComponent implements OnInit {

  prs: PurchaseRequest[];

  constructor(
    private sys: SystemService,
    private prsvc: PurchaseRequestService
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    this.prsvc.list()
      .subscribe(resp => {
        console.log("Requests: ", resp);
        this.prs = resp.data;
      });
  }

}

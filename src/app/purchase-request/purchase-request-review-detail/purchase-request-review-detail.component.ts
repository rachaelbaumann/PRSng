import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-purchase-request-review-detail',
  templateUrl: './purchase-request-review-detail.component.html',
  styleUrls: ['./purchase-request-review-detail.component.css']
})
export class PurchaseRequestReviewDetailComponent implements OnInit {

  constructor(
    private sys: SystemService
  ) { }

  ngOnInit() {
    // this.sys.checkForLogin();
  }

}

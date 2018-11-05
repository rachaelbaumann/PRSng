import { Component, OnInit } from '@angular/core';
// import things:
import { SystemService } from '../../system/system.service';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';

@Component({
  selector: 'app-purchase-request-list',
  templateUrl: './purchase-request-list.component.html',
  styleUrls: ['./purchase-request-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {

  prs: PurchaseRequest[];

  constructor(
    private sys: SystemService,
    private prsvc: PurchaseRequestService
    ) { }

  ngOnInit() {
    this.prsvc.list().subscribe(resp => {
      console.log("Requests: ", resp.data);
      this.prs = resp.data;
    });
  }

}

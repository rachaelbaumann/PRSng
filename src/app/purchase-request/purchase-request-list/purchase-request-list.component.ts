import { Component, OnInit } from '@angular/core';
// import things:
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';

@Component({
  selector: 'app-purchase-request-list',
  templateUrl: './purchase-request-list.component.html',
  styleUrls: ['./purchase-request-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {

  prs: PurchaseRequest[];

  constructor(private prsvc: PurchaseRequestService) { }

  ngOnInit() {
    this.prsvc.list().subscribe(resp => {
      console.log("Requests: ", resp.data);
      this.prs = resp.data;
    });
  }

}

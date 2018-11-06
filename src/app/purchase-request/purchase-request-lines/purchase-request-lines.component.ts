import { Component, OnInit } from '@angular/core';
// import this
import { ActivatedRoute } from '@angular/router'; // reads parameters stored
import { SystemService } from '../../system/system.service';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';
import { LineItemsService } from '../../line-items/line-items.service';
import { LineItems } from '../../line-items/line-items.class';

@Component({
  selector: 'app-purchase-request-lines',
  templateUrl: './purchase-request-lines.component.html',
  styleUrls: ['./purchase-request-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {

  pr: PurchaseRequest;
  prlis: LineItems[];

  compareFn(v1, v2) {
    return v1.id === v2.id;
  }

  constructor(
    private sys: SystemService,
    private prsvc: PurchaseRequestService,
    private prlisvc: LineItemsService,
    private route: ActivatedRoute, 
    // private router: Router
    ) { }

  // ngOnInit() {
  //   this.prsvc.list().subscribe(resp => {
  //     console.log("Requests: ", resp.data);
  //     this.prs = resp.data;
  //   });
  // }
  ngOnInit() {
    let id = this.route.snapshot.params.id;
    console.log("Request ID: ", id);
    
    this.prsvc.get(id)
      .subscribe(resp => {
        console.log("Request: ", resp);
        this.pr = resp.data;
      });

      this.prlisvc.getprli(id)
      .subscribe(resp => {
        console.log("Request: ", resp);
        this.prlis = resp.data;
      });
  }

}

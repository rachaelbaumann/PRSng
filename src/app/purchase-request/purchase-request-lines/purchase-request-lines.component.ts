import { Component, OnInit } from '@angular/core';
// import this
import { ActivatedRoute } from '@angular/router'; // reads parameters stored
import { SystemService } from '../../system/system.service';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';

@Component({
  selector: 'app-purchase-request-lines',
  templateUrl: './purchase-request-lines.component.html',
  styleUrls: ['./purchase-request-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {

  // prs: PurchaseRequest[];
  pr: PurchaseRequest;

  // save(): void {
  //   this.prsvc.change(this.pr).subscribe(resp => {
  //     console.log("response: ", resp);
  //     this.router.navigateByUrl('/prs/list');
  //   });
  // }

  // delete(): void {
  //   this.prsvc.remove(this.pr).subscribe(resp => {
  //     console.log("response: ", resp);
  //     this.router.navigateByUrl('/prs/list');
  //   });
  // }

  compareFn(v1, v2) {
    return v1.id === v2.id;
  }

  constructor(
    private sys: SystemService,
    private prsvc: PurchaseRequestService,
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
  }

}

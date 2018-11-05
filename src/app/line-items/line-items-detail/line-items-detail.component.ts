import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../system/system.service';
// import this
import { ActivatedRoute, Router } from '@angular/router'; // reads parameters stored
// import LineItemsService
import { LineItemsService } from '../line-items.service';
// import LineItems class
import { LineItems } from '../line-items.class';

@Component({
  selector: 'app-line-items-detail',
  templateUrl: './line-items-detail.component.html',
  styleUrls: ['./line-items-detail.component.css']
})
export class LineItemsDetailComponent implements OnInit {

  prli: LineItems;

  delete(): void {
    this.prlisvc.remove(this.prli).subscribe(resp => {
      console.log("response: ", resp);
      this.router.navigateByUrl('/prs/list');
    });
  }

  constructor(
    private sys: SystemService,
    private route: ActivatedRoute, 
    private prlisvc: LineItemsService,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id; // must be same id as in routing-module
    this.prlisvc.get(id).subscribe(resp => {
      console.log("response: ", resp);
      this.prli = resp.data;
    });
  }

}

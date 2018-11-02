import { Component, OnInit } from '@angular/core';
// import this
import { ActivatedRoute, Router } from '@angular/router'; // reads parameters stored
// import UserService
import { LineItemsService } from '../line-items.service';
// import User class
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

import { Component, OnInit } from '@angular/core';
import { LineItemsService } from '../line-items.service';
import { LineItems } from '../line-items.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-line-items-list',
  templateUrl: './line-items-list.component.html',
  styleUrls: ['./line-items-list.component.css']
})
export class LineItemsListComponent implements OnInit {

  prlis: LineItems[];

  constructor(
    private sys: SystemService,
    private prlisvc: LineItemsService
    ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    this.prlisvc.list().subscribe(resp => {
      console.log("Line items: ", resp.data);
      this.prlis = resp.data;
    });
  }

}

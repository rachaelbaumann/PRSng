import { Component, OnInit } from '@angular/core';
import { LineItemsService } from '../line-items.service';
import { LineItems } from '../line-items.class';

@Component({
  selector: 'app-line-items-list',
  templateUrl: './line-items-list.component.html',
  styleUrls: ['./line-items-list.component.css']
})
export class LineItemsListComponent implements OnInit {

  prlis: LineItems[];

  constructor(private prlisvc: LineItemsService) { }

  ngOnInit() {
    this.prlisvc.list().subscribe(resp => {
      console.log("Line items: ", resp.data);
      this.prlis = resp.data;
    });
  }

}

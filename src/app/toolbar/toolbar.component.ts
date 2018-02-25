import {Component, OnInit} from '@angular/core';
import {ToolbarItem} from "./toolbar";

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  toolbar: ToolbarItem[] = [];

  constructor() {
    let tbi1: ToolbarItem = new ToolbarItem('item1', 'fa fa-globe');
    let tbi2: ToolbarItem = new ToolbarItem('item2', 'fa fa-sitemap');
    let tbi3: ToolbarItem = new ToolbarItem('item3', 'fa fa-file-o');
    let tbi4: ToolbarItem = new ToolbarItem('item4', 'fa fa-adjust');
    this.toolbar = [tbi1, tbi2, tbi3, tbi4];
  }

  ngOnInit() {
  }

}

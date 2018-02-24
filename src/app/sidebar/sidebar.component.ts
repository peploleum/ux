import {Component, OnInit} from '@angular/core';
import {SidebarItem} from "./sidebar";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebar: Array<SidebarItem> = [];

  constructor() {
    let item1: SidebarItem = new SidebarItem('Awesome', 'fa fa-globe');
    let item2: SidebarItem = new SidebarItem('Awesome II', 'fa fa-file-o');
    let item3: SidebarItem = new SidebarItem('Awesome III', 'fa fa-sitemap');
    this.sidebar = [item1, item2, item3];
  }

  ngOnInit() {
  }

}

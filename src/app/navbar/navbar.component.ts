import {Component, OnInit} from '@angular/core';
import {NavbarItem} from "./navbar-item";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbar: Array<NavbarItem> = [];

  constructor() {
    let item1: NavbarItem = new NavbarItem('fa fa-globe', 'Awesome nav I');
    let item2: NavbarItem = new NavbarItem('fa fa-sitemap', 'Awesome nav II');
    let item3: NavbarItem = new NavbarItem('fa fa-file-o', 'Awesome nav II');
    let item4: NavbarItem = new NavbarItem('fa fa-plane', 'Awesome nav IV');
    this.navbar = [item1, item2, item3, item4];
  }

  ngOnInit() {
  }

}

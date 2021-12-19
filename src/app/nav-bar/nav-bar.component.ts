import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', routerLink: '/home' },
      { label: 'Stay', routerLink: '/stay' },
      { label: 'Contact', routerLink: '/contact' },
      { label: 'Book now', routerLink: '/book-list' }
    ];
  }
}

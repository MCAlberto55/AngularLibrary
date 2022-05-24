import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent implements OnInit {
  userId: string;
  userCartId: string;
  @Input() logged: boolean;
  products: [];

  constructor() {}

  ngOnInit(): void {}

  logOut() {
    localStorage.removeItem('UserToken');
    location.reload();
  }
}

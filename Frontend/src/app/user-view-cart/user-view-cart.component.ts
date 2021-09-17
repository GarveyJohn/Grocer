import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-view-cart',
  templateUrl: './user-view-cart.component.html',
  styleUrls: ['./user-view-cart.component.css']
})
export class UserViewCartComponent implements OnInit {

  cart:Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cart = JSON.parse(sessionStorage.getItem("cart")!);
  }

}

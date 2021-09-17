import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-delete-items',
  templateUrl: './user-delete-items.component.html',
  styleUrls: ['./user-delete-items.component.css']
})
export class UserDeleteItemsComponent implements OnInit {

  cart:Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.cart = JSON.parse(sessionStorage.getItem("cart")!);
  }

  deleteItem(name:string)
  {
    for(let i = 0; i < this.cart.length; i++)
    {
      if(this.cart[i].name == name)
      {
        this.cart.splice(i,1);
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
        break;
      }
    }
  }

}

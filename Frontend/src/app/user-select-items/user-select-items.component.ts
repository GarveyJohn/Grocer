import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-user-select-items',
  templateUrl: './user-select-items.component.html',
  styleUrls: ['./user-select-items.component.css']
})
export class UserSelectItemsComponent implements OnInit {

  cart:Array<any> = [];
  arr:Array<any> = [];
  constructor(public productSer:ProductsService) { }

  ngOnInit(): void {
    this.cart = JSON.parse(sessionStorage.getItem("cart")!);
    this.productSer.getAllProducts().subscribe(result=>this.arr = result,err=>console.log(err));
  }

  addToCart(n:string,p:number)
  {
    let temp = {name:n,price:p};
    this.cart.push(temp);
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

}

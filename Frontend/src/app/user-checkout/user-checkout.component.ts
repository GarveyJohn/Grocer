import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.css']
})
export class UserCheckoutComponent implements OnInit {

  msg:string = "";
  cart:Array<any> = [];
  total:number = 0;
  constructor(public orderSer:ReportsService, public userSer:UserService) { }

  ngOnInit(): void {
    this.cart = JSON.parse(sessionStorage.getItem("cart")!);
    for(let i = 0; i < this.cart.length; i++)
    {
      this.total+=this.cart[i].price;
    }
  }

  checkout()
  {
    let temp = JSON.parse(sessionStorage.getItem("user")!);
    let user = temp[0];
    if(user.funds > this.total)
    {
      user.funds = user.funds - this.total;
      this.userSer.updateFunds(user).subscribe(result=>console.log(result),err=>console.log(err));
      let orderID:number = Math.floor(Math.random() * 1000);
      let order = {orderID:orderID,status:"Processing",userID:user.userID,time:"Daily"};
      this.orderSer.storeOrder(order).subscribe(result=>this.msg = result,err=>console.log(err));
      this.cart = [];
      sessionStorage.setItem('cart', JSON.stringify(this.cart));
    }
    else
    {
      this.msg = "Not enough funds in your account";
    }
    
    
  }
}

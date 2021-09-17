import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  msg:String = "";
  msg1:String = "";
  arr:Array<any> = [];
  productRef = new FormGroup({
    productID: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl()
  })
  constructor(public routes:Router, public productSer:ProductsService) { }

  ngOnInit(): void {
    this.productSer.getAllProducts().subscribe(result=>this.arr = result,err=>console.log(err));
  }

  updatePrice()
  {
    let employee = this.productRef.value
    this.productSer.updatePrice(employee).subscribe(result=>this.msg = result,err=>console.log(err));
    this.productSer.getAllProducts().subscribe(result=>this.arr = result,err=>console.log(err));
    this.productRef.reset();
  }

  updateQuantity()
  {
    let employee = this.productRef.value
    this.productSer.updateQuantity(employee).subscribe(result=>this.msg1 = result,err=>console.log(err));
    this.productSer.getAllProducts().subscribe(result=>this.arr = result,err=>console.log(err));
    this.productRef.reset();
  }

}

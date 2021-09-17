import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  msg:String = "";
  arr:Array<any> = [];
  productRef = new FormGroup({
    productID: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    discount: new FormControl(),
    quantity: new FormControl()
  })
  constructor(public routes:Router, public productSer:ProductsService) { }

  ngOnInit(): void {
    this.productSer.getAllProducts().subscribe(result=>this.arr = result,err=>console.log(err));
  }

  addProduct()
  {
    let employee = this.productRef.value
    this.productSer.createProduct(employee).subscribe(result=>this.msg = result,err=>console.log(err))
    this.productSer.getAllProducts().subscribe(result=>this.arr = result,err=>console.log(err));
    this.productRef.reset();
  }

}

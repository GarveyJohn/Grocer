import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {

  msg:String = "";
  arr:Array<any> = [];
  productRef = new FormGroup({
    productID: new FormControl()
  })
  constructor(public routes:Router, public productSer:ProductsService) { }

  ngOnInit(): void {
    this.productSer.getAllProducts().subscribe(result=>this.arr = result,err=>console.log(err));
  }

  deleteProduct()
  {
    let employee = this.productRef.value
    this.productSer.deleteProduct(employee).subscribe(result=>this.msg = result,err=>console.log(err))
    this.productSer.getAllProducts().subscribe(result=>this.arr = result,err=>console.log(err));
    this.productRef.reset();
  }
}

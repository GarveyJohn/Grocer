import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-user-order-status',
  templateUrl: './user-order-status.component.html',
  styleUrls: ['./user-order-status.component.css']
})
export class UserOrderStatusComponent implements OnInit {

  arr:Array<any> = [];
  constructor(public orderSer:ReportsService) { }

  ngOnInit(): void {
    let temp = JSON.parse(sessionStorage.getItem("user")!);
    let user = temp[0];
    this.orderSer.getUserOrder(user).subscribe(result=>this.arr = result,err=>console.log(err));
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-employee-update-status',
  templateUrl: './employee-update-status.component.html',
  styleUrls: ['./employee-update-status.component.css']
})
export class EmployeeUpdateStatusComponent implements OnInit {

  arr:Array<any> = [];
  msg:String = "";
  orderRef = new FormGroup({
    orderID: new FormControl(),
    status: new FormControl()
  })
  constructor(public routes:Router, public reportSer:ReportsService) { }

  ngOnInit(): void {
    this.reportSer.getReports().subscribe(result=>this.arr = result,err=>console.log(err));
  }

  updateOrderStatus()
  {
    let order = this.orderRef.value
    this.reportSer.updateOrder(order).subscribe(result=>this.msg = result,err=>console.log(err));
    this.reportSer.getReports().subscribe(result=>this.arr = result,err=>console.log(err));
    this.orderRef.reset();
  }

}

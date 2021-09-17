import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-employee-send-request',
  templateUrl: './employee-send-request.component.html',
  styleUrls: ['./employee-send-request.component.css']
})
export class EmployeeSendRequestComponent implements OnInit {

  msg:String ="";
  requestRef = new FormGroup({
    empID: new FormControl(),
    productID: new FormControl(),
    productName: new FormControl(),
    reqMsg: new FormControl()
  })
  constructor(public routes:Router, public requestSer:RequestsService) { }

  ngOnInit(): void {
  }

  addRequest()
  {
    let employee = this.requestRef.value
    this.requestSer.storeRequest(employee).subscribe(result=>this.msg = result,err=>console.log(err))
    this.requestRef.reset();
  }

}

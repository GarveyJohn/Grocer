import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {

  arr:Array<any> = [];
  msg:String ="";
  constructor(public routes:Router, public requestSer:RequestsService) { }

  ngOnInit(): void {
    this.requestSer.getRequests().subscribe(result=>this.arr = result,err=>console.log(err));
  }

}

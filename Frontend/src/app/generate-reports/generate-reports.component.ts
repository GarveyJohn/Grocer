import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-generate-reports',
  templateUrl: './generate-reports.component.html',
  styleUrls: ['./generate-reports.component.css']
})
export class GenerateReportsComponent implements OnInit {

  displayArray:Array<any> = [];
  arr:Array<any> = [];
  msg:String ="";
  constructor(public routes:Router, public reportSer:ReportsService) { }

  ngOnInit(): void {
    this.reportSer.getReports().subscribe(result=>this.arr = result,err=>console.log(err));
  }

  timing(event: any)
  {
    this.displayArray = [];
    let target = event.target.value
    if(target == "daily")
    {
      for(let i = 0; i < this.arr.length; i++)
      {
        if(this.arr[i].time == "Daily")
        {
          this.displayArray.push(this.arr[i]);
        }
      }
    }
    else if(target == "weekly")
    {
      for(let i = 0; i < this.arr.length; i++)
      {
        if(this.arr[i].time == "Daily" || this.arr[i].time == "Weekly")
        {
          this.displayArray.push(this.arr[i]);
        }
      }
    }
    else
    {
      this.displayArray = this.arr;
    }
  }

}

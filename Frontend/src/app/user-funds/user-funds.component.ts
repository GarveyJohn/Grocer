import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-funds',
  templateUrl: './user-funds.component.html',
  styleUrls: ['./user-funds.component.css']
})
export class UserFundsComponent implements OnInit {

  msg:string ="";
  userRef = new FormGroup({
    funds: new FormControl()
  })
  constructor(public userSer:UserService) { }

  ngOnInit(): void {
  }

  addFunds()
  {
    let additionalFunds = this.userRef.value
    let temp = JSON.parse(sessionStorage.getItem("user")!);
    let user = temp[0];
    console.log(user.funds)
    user.funds+= additionalFunds.funds;
    console.log(user.funds)

    this.userSer.updateFunds(user).subscribe(result=>this.msg = result,err=>console.log(err));
  }

}

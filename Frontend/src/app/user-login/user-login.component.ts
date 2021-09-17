import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  cart:Array<any> = [];
  msg:String = "";
  userLoginRef = new FormGroup({
    userID: new FormControl(),
    password: new FormControl()
  })
  constructor(public routes:Router, public userLoginSer:UserService, public userInfo:UserService) { }

  ngOnInit(): void {
    
  }

  checkUser()
  {
    let login = this.userLoginRef.value;
    this.userLoginSer.signIn(login).subscribe(result=>{
      if(result == "success login")
      {
        this.userInfo.getOneUser(login).subscribe(res=>sessionStorage.setItem("user", JSON.stringify(res)),error=>console.log(error));
        sessionStorage.setItem('cart', JSON.stringify(this.cart));   
        this.routes.navigate(["userHomePage",{userID:login.userID}])
      }
      else
      {
        this.msg = result;
      }
    },err=>console.log(err))

    this.userLoginRef.reset();
  }
}

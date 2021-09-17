import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from '../admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  msg:String = "";
  adminLoginRef = new FormGroup({
    adminID: new FormControl(),
    password: new FormControl()
  })
  constructor(public adminLoginSer:AdminLoginService, public routes:Router) { }

  ngOnInit(): void {
  }

  checkUser()
  {
    let login = this.adminLoginRef.value;
    this.adminLoginSer.checkLoginDetail(login).subscribe(result=>{
      if(result == "Success")
      {
        this.routes.navigate(["adminHomePage"])
      }
      else
      {
        this.msg = result;
      }
    },err=>console.log(err))

    this.adminLoginRef.reset();
  }

}

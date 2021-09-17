import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  msg:String = "";
  employeeLoginRef = new FormGroup({
    empID: new FormControl(),
    password: new FormControl()
  })
  constructor(public routes:Router, public employeeSer:EmployeeService) { }

  ngOnInit(): void {
  }

  checkUser()
  {
    let login = this.employeeLoginRef.value;
    this.employeeSer.signIn(login).subscribe(result=>{
      if(result !=null)
      {
        if(login.password == "tcs123")
        {
          this.routes.navigate(["employeeEditProfile"])
        }
        else
        {
          this.routes.navigate(["employeeHomePage"])
        }
        
      }
      else
      {
        this.msg = result;
      }
    },err=>console.log(err))

    this.employeeLoginRef.reset();
  }

}

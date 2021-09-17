import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit-profile',
  templateUrl: './employee-edit-profile.component.html',
  styleUrls: ['./employee-edit-profile.component.css']
})
export class EmployeeEditProfileComponent implements OnInit {

  msg:String = "";
  arr:Array<any> = [];
  employeeRef = new FormGroup({
    empID: new FormControl(),
    password: new FormControl()
  })
  constructor(public employeeSer:EmployeeService, public routes:Router) { }

  ngOnInit(): void {
  }

  updatePassword()
  {
    let employee = this.employeeRef.value
    this.employeeSer.updatePassword(employee).subscribe(result=>{
      if(result == "password successfully updated")
      {
        this.routes.navigate(["employeeLogin"])
      }
    },err=>console.log(err));
    this.employeeRef.reset();
  }

}

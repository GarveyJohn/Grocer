import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  msg:String = "";
  arr:Array<any> = [];
  employeeRef = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    empID: new FormControl(),
    password: new FormControl("tcs123")
  })
  constructor(public employeeSer:EmployeeService, public routes:Router) { }

  ngOnInit(): void {
    this.employeeSer.getEmployees().subscribe(result=>this.arr = result,err=>console.log(err));
  }

  addEmployee()
  {
    let employee = this.employeeRef.value

    this.employeeSer.createEmployee(employee).subscribe(result=>{
      if(result == "Record stored successfully")
      {
        this.msg = result
      }
      else
      {
        this.msg = "Must be a unique Employee ID and/or Email."
      }
    },err=>console.log(err))

    this.employeeSer.getEmployees().subscribe(result=>this.arr = result,err=>console.log(err));
    this.employeeRef.reset();
  }

}

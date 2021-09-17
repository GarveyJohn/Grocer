import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  msg:String = "";
  arr:Array<any> = [];
  employeeRef = new FormGroup({
    empID: new FormControl()
  })

  constructor(public employeeSer:EmployeeService, public routes:Router) { }

  ngOnInit(): void {
    this.employeeSer.getEmployees().subscribe(result=>this.arr = result,err=>console.log(err));
  }

  deleteEmployee()
  {
    let emp = this.employeeRef.value
    this.employeeSer.deleteEmployee(emp).subscribe(result=>{
      if(result == '{"deletedCount":1}')
      {
        this.msg = "Successfully deleted record"
      }
      else
      {
        this.msg = "Nothing was deleted";
      }
    },err=>console.log(err))
    this.employeeSer.getEmployees().subscribe(result=>this.arr = result,err=>console.log(err));
    this.employeeRef.reset();
  }

}

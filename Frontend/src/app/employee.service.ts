import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  createEmployee(employeeInfo:Employee):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/employee/storeEmployee", employeeInfo,{responseType:"text"});
  }

  deleteEmployee(employeeInfo:Employee):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/employee/deleteEmployee", employeeInfo,{responseType:"text"});
  }

  getEmployees():Observable<any>
  {
    return this.http.get("http://localhost:9090/api/employee/getEmployees");
  }

  signIn(employeeInfo:Employee):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/employee/signIn", employeeInfo);
  }

  updatePassword(employeeInfo:Employee):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/employee/updatePassword", employeeInfo,{responseType:"text"});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AdminLogin } from './admin-login';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(public http:HttpClient) { }

  checkLoginDetail(adminLogin:AdminLogin):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/admin/signIn", adminLogin,{responseType:"text"});
  }
}

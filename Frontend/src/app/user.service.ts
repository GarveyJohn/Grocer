import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  getUsers():Observable<any>
  {
    return this.http.get("http://localhost:9090/api/user/getAllUsers");
  }

  unlockUSer(userInfo:User):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/user/setLock", userInfo,{responseType:"text"});
  }

  getOneUser(userInfo:User):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/user/getOneUser", userInfo);
  }

  updateFunds(userInfo:User):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/user/addFunds", userInfo);
  }

  signIn(userInfo:User):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/user/signIn", userInfo, {responseType:"text"});
  }

  editProfile(userInfo:User):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/user/editProfile", userInfo);
  }

  signUp(userInfo:User):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/user/signUp", userInfo, {responseType:"text"});
  }

}

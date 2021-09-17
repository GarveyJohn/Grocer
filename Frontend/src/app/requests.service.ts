import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(public http:HttpClient) { }

  getRequests():Observable<any>
  {
    return this.http.get("http://localhost:9090/api/request/getAllRequests");
  }

  storeRequest(requestInfo:Request):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/request/storeRequest", requestInfo,{responseType:"text"});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(public http:HttpClient) { }
  getReports():Observable<any>
  {
    return this.http.get("http://localhost:9090/api/order/getAllOrders");
  }

  updateOrder(orderInfo:Order):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/order/updateOrderStatus", orderInfo,{responseType:"text"});
  }

  storeOrder(orderInfo:Order):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/order/storeOrder", orderInfo,{responseType:"text"});
  }

  getUserOrder(orderInfo:Order):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/order/getUserOrders", orderInfo);
  }
}

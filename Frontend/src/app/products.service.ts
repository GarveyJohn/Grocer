import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient) { }

  createProduct(employeeInfo:Employee):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/product/storeProduct", employeeInfo,{responseType:"text"});
  }

  deleteProduct(employeeInfo:Employee):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/product/deleteProduct", employeeInfo,{responseType:"text"});
  }

  updatePrice(employeeInfo:Employee):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/product/updatePrice", employeeInfo,{responseType:"text"});
  }

  updateQuantity(employeeInfo:Employee):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/product/updateQuantity", employeeInfo,{responseType:"text"});
  }

  getAllProducts():Observable<any>
  {
    return this.http.get("http://localhost:9090/api/product/getAllProducts");
  }
}

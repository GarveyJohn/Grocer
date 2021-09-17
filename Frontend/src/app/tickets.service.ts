import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(public http:HttpClient) { }

  getTickets():Observable<any>
  {
    return this.http.get("http://localhost:9090/api/ticket/getAllTickets");
  }

  deleteTicket(ticketInfo:Ticket):Observable<any>
  {
    return this.http.post("http://localhost:9090/api/ticket/deleteTicket", ticketInfo,{responseType:"text"});
  }
}

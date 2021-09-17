import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-user-raise-ticket',
  templateUrl: './user-raise-ticket.component.html',
  styleUrls: ['./user-raise-ticket.component.css']
})
export class UserRaiseTicketComponent implements OnInit {

  msg:string ="";
  ticketRef = new FormGroup({
    userID: new FormControl(),
    issue: new FormControl()
  })
  constructor(public ticketSer:TicketsService) { }

  ngOnInit(): void {
  }

  raiseTicket()
  {
    let ticket = this.ticketRef.value
    this.ticketSer.addTicket(ticket).subscribe(result=>this.msg = result,err=>console.log(err))
    this.ticketRef.reset();
  }

}

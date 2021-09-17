import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TicketsService } from '../tickets.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-employee-unblock-users',
  templateUrl: './employee-unblock-users.component.html',
  styleUrls: ['./employee-unblock-users.component.css']
})
export class EmployeeUnblockUsersComponent implements OnInit {

  msg:String = "";
  msg1:String = ""
  arr:Array<any> = [];
  displayArray:Array<any> = [];
  userRef = new FormGroup({
    userID: new FormControl(),
    locked: new FormControl(false)
  })
  constructor(public userSer:UserService, public ticketSer:TicketsService) { }

  ngOnInit(): void {
    this.ticketSer.getTickets().subscribe(result=>this.arr = result,err=>console.log(err));
  }

  unlockUser()
  {
    let user = this.userRef.value
    this.userSer.unlockUSer(user).subscribe(result=>this.msg = result,err=>console.log(err));
    this.ticketSer.deleteTicket(user).subscribe(result=>this.msg1 = result,err=>console.log(err));
    this.ticketSer.getTickets().subscribe(result=>this.arr = result,err=>console.log(err));
    this.userRef.reset();
  }
}

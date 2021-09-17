import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  msg:string = "";
  profileRef = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    DOB: new FormControl(),
    phoneNumber: new FormControl(),
    address: new FormControl(),
    userID: new FormControl()
  })
  constructor(public userSer:UserService) { }

  ngOnInit(): void {
  }

  addUser()
  {
    let user = this.profileRef.value
    this.userSer.signUp(user).subscribe(result=>this.msg=result,err=>this.msg = err);
  }

}

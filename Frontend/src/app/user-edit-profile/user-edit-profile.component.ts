import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {

  msg:string = "";
  profileRef = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    DOB: new FormControl(),
    phoneNumber: new FormControl(),
    address: new FormControl()
  })

  constructor(public userSer:UserService) { }

  ngOnInit(): void {
  }

  editProfile()
  {
    let user = this.profileRef.value
    this.userSer.editProfile(user).subscribe(result=>this.msg=result,err=>this.msg = err);
  }

}

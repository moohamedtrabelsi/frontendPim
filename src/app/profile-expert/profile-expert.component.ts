import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-profile-expert',
  templateUrl: './profile-expert.component.html',
  styleUrls: ['./profile-expert.component.css']
})
export class ProfileExpertComponent implements OnInit {

  user: User;
  curUser: User;
  userForm: FormGroup;
  listUsers: User[];
  constructor(private service: UserService, private route: Router) {

  }

  ngOnInit(): void {
    this.user = new User();
    this.curUser = JSON.parse(localStorage.getItem('curentuser'));

    this.userForm = new FormGroup({
      firstname: new FormControl(this.curUser.firstname),
      lastname: new FormControl(this.curUser.lastname),
      username: new FormControl(this.curUser.username),
      email: new FormControl(this.curUser.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password: new FormControl(),

    });
  }
  updateprofile() {

    Object.assign(this.user, this.userForm.value);

    this.user.username = this.curUser.username

    this.service.updateprofile(this.user).subscribe();

  }

}

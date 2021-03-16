import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: User;
  hamma: User;

  userForm: FormGroup;
  profilejson: string = null;
  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void {

    this.user = new User();
    this.hamma = new User();

    this.userForm = new FormGroup({
      //email : new FormControl( '',Validators.required && Validators.email),
      password: new FormControl(),
      username: new FormControl(),

    });
  }



  get email() {
    return this.userForm.get('username');
  }
  async loginUser() {
    Object.assign(this.user, this.userForm.value);
    this.service.loginUser(this.user).subscribe(
      res => {
        this.profilejson = JSON.stringify(res),
          localStorage.setItem('curentuser', this.profilejson);


        this.route.navigate(['/expert/expertashboard']);


      }
    )


  }

}

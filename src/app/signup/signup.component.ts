import { Component, OnInit } from '@angular/core';

import { tokenName } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  user : User;
  userForm : FormGroup;
   listUsers:User[];
   constructor(private service :UserService ,private route:Router) { 
 
   }
 
    ngOnInit(): void {
             this.user=new User();
               
             this.userForm = new FormGroup({
              firstname : new FormControl(),
              lastname : new FormControl(),
              username : new FormControl(),
               email : new FormControl( '',[Validators.required , Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
               password : new FormControl(),
              
           });
 
 
                   }
 
 
   
 
   
  
   save(){
 
 
     Object.assign(this.user,this.userForm.value);
 
     
       
       
     this.service.registerUser(this.user).subscribe();

   this.route.navigate([ '/home']);

     
 }
 }

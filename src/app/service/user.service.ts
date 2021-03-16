import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
/*@Injectable()
export  class JsonParser {
  parse(text: string): any {
    return JSON.parse(text);
  }
}*/


export class UserService {

  constructor(private http:HttpClient ,private route:Router) { }

 register_url="http://localhost:3000/api/auth/signup";
 login_url="http://localhost:3000/api/auth/signin";
 updateprofile_url ="http://localhost:3000/api/auth/updateuser";

  registerUser(user: User){
    
   return this.http.post(this.register_url, user);

  }

 loginUser( user:User){
    //console.log(this.http.get(this.login_url));
    return this.http.post(this.login_url, user);

  //  return fetch(this.login_url,user).then(res=>res.json)
   
  }


  loggedIn() {
    return !!localStorage.getItem('token')    
  }

  get Token() {
    return localStorage.getItem('token')
  }

  logoutUser(){

    localStorage.removeItem('token');
    this.route.navigate([ '/home']);
     
  }
  updateprofile(user:User){
    return this.http.post(this.updateprofile_url, user);
  }
  
}

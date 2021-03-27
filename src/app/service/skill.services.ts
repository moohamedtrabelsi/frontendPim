import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { Body } from '@angular/http/src/body';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


import { Skill } from '../models/skill.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {


  addskill_url = "http://localhost:3000/admin/addskill";
  deletskill_url = "http://localhost:3000/api/auth/signin";
  getskills_url = "http://localhost:3000/api/skill/skills";
  getmyskills_url="http://localhost:3000/api/skill/myskills";


  constructor(private http: HttpClient, private route: Router) { }




  uploadImage(file: File) {
    const formData = new FormData();

    formData.append('file', file);

    return this.http.post('http://localhost:3000/api/file/uploadfile', formData);
  }



  addSkill(skill: Skill) {

    return this.http.post(this.addskill_url, skill);

  }

  deletSkill(skill: Skill) {
    //console.log(this.http.get(this.login_url));
    return this.http.post(this.deletskill_url, skill);

    //  return fetch(this.login_url,user).then(res=>res.json)

  }


  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.getskills_url);
  }

  getmySkills(user:User): Observable<Skill[]> {
    const myskills = `${this.getmyskills_url}?${user.username}`;

    let param = new HttpHeaders().set("username",<string>user.username);
//return this.http.jsonp<Skill[]>(myskills,'callback');
    return this.http.get<Skill[]>(this.getmyskills_url,{headers:param});
  }


}

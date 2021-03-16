import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {


  addskill_url = "http://localhost:3000/admin/addskill";
  deletskill_url = "http://localhost:3000/api/auth/signin";
  getskills_url = "http://localhost:3000/api/skill/skills";


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


}

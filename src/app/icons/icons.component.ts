import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../models/skill.model';
import { SkillService } from '../service/skill.services';
import { Observable, Observer } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {


  skills:Skill[]=[];
  hama :User;
  data:string;

  constructor(private service : SkillService , private route: Router) { }

  async ngOnInit() {
    await this.getuser();
    this.getSkills();    


  }


  getSkills() {
    return this.service.getmySkills(this.hama).subscribe
    (
      data => 
      {
        for (const d of (data as any)) {
         var skil = new Skill();
         skil.name=d.name;
         skil.filename='http://localhost:3000/api/image/'+ d.filename + '' ;
          this.skills.push(skil);
       
        }
        console.log(this.skills);
      });
  
  }
  async getuser(){
    this.hama = await JSON.parse(localStorage.getItem('curentuser'));
     //console.log(this.hama.username);
  }

}

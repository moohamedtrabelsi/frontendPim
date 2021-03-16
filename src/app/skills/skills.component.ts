import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule, Validators } from '@angular/forms';
import { SkillService } from '../service/skill.services';
import { Skill } from '../models/skill.model';
import { Router } from '@angular/router';
import { newArray } from '@angular/compiler/src/util';
import { Observable, Observer } from 'rxjs';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  selectedFile: ImageSnippet;
  skillForm : FormGroup;
  skill:Skill;

  skills:Skill[];
  listJson : any=[];
  base64Image: any;
  imgurl:any='http://127.0.0.1:3000/api/image/file.jpg'

  constructor(private service : SkillService , private route: Router) { }

  ngOnInit(): void {
    this.skill = new Skill();

    let imageUrl = '127.0.0.1:3000/api/image/file';

    this.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
      console.log(base64data);
      this.base64Image = 'data:image/jpg;base64,' + base64data;
    });

    //this.skills =  new Array();

    this.skillForm = new FormGroup({
      name : new FormControl(),
    });

    this.getSkills();
      //(res:Skill[])=>this.skills=res );


     //console.log(this.skills.);
    
  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      this.service.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
    });

    reader.readAsDataURL(file);
  }
  

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }


addSkill(){
  Object.assign(this.skill , this.skillForm.value);
  this.service.addSkill(this.skill).subscribe(
    res=>console.log(this.skill.name),
    this.listJson.push(this.skill.name),
  );
  //this.route.navigate(['dashboard']);

}
  getSkills() {
  return this.service.getSkills().subscribe
  (
    data => 
    {
      for (const d of (data as any)) {
        this.listJson.push(
           d.name
        );
      }
      console.log(this.listJson);
    });

}
}
 

import{ Offer } from "./offer.model";
import{ Skill } from "./skill.model";
import{ Role } from "./role.model";
 export class User {

    username: String;
    firstname: String;
    lastname: String;
    email: String;
    password: String;
    salary:Number;
    visibility:Boolean;
    score:Number;
    role: Role;
    skill: Skill[];
    offer: Offer[];
    contacts: User[];
}
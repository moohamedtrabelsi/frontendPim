import { Role } from './role.model';
import { User } from './user.model';


export class Expert {
    username: String;
    firstname: String;
    lastname: String;
    email: String;
    password: String;
    listofdp : User[];
    role : Role [];
}
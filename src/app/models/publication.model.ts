import{ Comment } from "./comment.model";
import{ Like } from "./like.model";
import { User } from './user.model';


export class Publication {
    comment: Comment [] ;
    like : Like [] ;
    author : User;
   

}
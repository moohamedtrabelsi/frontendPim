import{ Bill } from "./bill.model";
import { User } from './user.model';

export class Offer {
    bill : Bill ;
    author : User;
    owner : User;
}
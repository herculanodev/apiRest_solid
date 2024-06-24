import {User} from "../User"

export interface IUsersRepository{
    findByEmail(email:string): Promise<void>;
    save(user:User): Promise<void>


}
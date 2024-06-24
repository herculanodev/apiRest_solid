import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "../../userCases/createUser/createUserDTO";
import { User } from "../../User";



export class CreateUseUserCase {
    constructor(

        private usersRepository: IUsersRepository

    ) { }
    async execute(data: ICreateUserRequestDTO) {
        const userAIreadyExists = await this.usersRepository.findByEmail(data.email);
        if (userAIreadyExists) {

            throw new Error('User already exist');
        }
        const user = new User(data);
        await this.usersRepository.save(user);
    }
}

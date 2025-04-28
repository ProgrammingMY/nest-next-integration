import { Inject, Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { USER_REPO } from 'src/constants';

@Injectable()
export class UsersService {
    constructor(
        @Inject(USER_REPO)
        private usersRepository: typeof User
    ) { }

    async findOne(username: string): Promise<User | null> {
        return this.usersRepository.findOne<User>({
            where: {
                username
            }
        });
    }
}

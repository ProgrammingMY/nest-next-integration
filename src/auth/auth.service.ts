import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.entity';
import bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }

    // validate user login
    async signIn(username: string, password: string): Promise<Partial<User> | null> {
        const user = await this.usersService.findOne(username);

        // validate the password
        if (user) {
            const correctPass = await bcrypt.compare(password, user.password);

            if (correctPass) {
                const { password, ...result } = user;

                // generate jwt


                
                return result;
            }
        }

        return null;
    }


}

import { USER_REPO } from "src/constants";
import { User } from "src/users/users.entity";

export const usersProviders = [
    {
        provide: USER_REPO,
        useValue: User
    }
]
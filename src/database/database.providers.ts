
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from 'src/constants';
import { User } from 'src/users/users.entity';

export const databaseProviders = [
    {
        provide: SEQUELIZE,
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: process.env.DATABASE_HOST as string,
                port: 5400,
                username: process.env.DATABASE_USERNAME as string,
                password: process.env.DATABASE_PASSWORD as string,
                database: 'postgres',
            });
            sequelize.addModels([User]);
            await sequelize.sync();
            return sequelize;
        },
    },
];

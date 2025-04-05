
import { Sequelize } from 'sequelize-typescript';
import { User } from '../app/users-service/src/users.entity';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'akmal',
    password: process.env.DB_PASS || 'postgres',
    database: process.env.DB_NAME || 'postgres',
    models: [User],
    logging: false,
});
    
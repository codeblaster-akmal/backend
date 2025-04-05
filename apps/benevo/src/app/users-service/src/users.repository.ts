
import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersRepository {
    async createUser(name: string): Promise<User> {
        return await User.create({ name });
    }

    async findAllUsers(): Promise<User[]> {
        return await User.findAll();
    }
}
    
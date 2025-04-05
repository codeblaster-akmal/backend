
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('rest')
    getAllUsers() {
        return this.usersService.findAll();
    }
   
    @Get('best')
    getAllUserstest() {
        return this.usersService.findAllTest();
    }
}
    
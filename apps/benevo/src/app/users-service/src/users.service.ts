
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findAll() {
        return [{ id: 1, name: 'John Doe' }];
    }
    findAllTest() {
        return [{ id: 1, name: 'John Doe Test' }];
    }
}
    
import { Injectable } from '@nestjs/common';
import { usersData } from 'src/data/users.data';
import { Users } from 'src/interfaces/users.interface';

@Injectable()
export class UsersService {
  private users: Users[] = usersData;
  getAllUsers(): Users[] {
    return this.users;
  }
  getOneUser(id: string): Users {
    return this.users.find((user) => user.id === id);
  }
  loginUser(name: string): Users {
    return this.users.find((user) => user.name === name);
  }
}

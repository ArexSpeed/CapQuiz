import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('/')
  getAllUsers() {
    return this.usersService.getAllUsers();
  }
  @Get('/:id')
  getOneUser(@Param('id') userId: string) {
    return this.usersService.getOneUser(userId);
  }
  // @Get('/login')
  // signinUser()
}

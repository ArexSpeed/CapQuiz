import { Controller, Get, Post, Param, Body } from '@nestjs/common';
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
  @Get('/login/:name')
  signinUser(@Param('name') userName: string) {
    return this.usersService.loginUser(userName);
  }
  // @Post('/login')
  // signinUser(@Body('name') userName: string) {
  //   return this.usersService.loginUser(userName);
  // }
  @Get('/role/:name')
  getUserRole(@Param('name') userName: string) {
    return this.usersService.getUserRole(userName);
  }
  // @Get('/login')
  // signinUser()
}

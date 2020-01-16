import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';

import { User, UserParams } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): Observable<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string): Observable<User> {
    return this.userService.getUserById(Number(id));
  }

  @Post()
  createUser(@Body() params: UserParams): Observable<User> {
    return this.userService.createUser(params);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() params: User): Observable<User> {
    return this.userService.updateUser(Number(id), params);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): Observable<number> {
    return this.userService.deleteUser(Number(id));
  }

  @Delete()
  deleteUsers(@Body() ids: string[]): Observable<number[]> {
    return this.userService.deleteUsers(ids.map((id: string) => Number(id)));
  }
}

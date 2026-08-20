import {
  BadRequestException,
  Body,
  Controller,
  // Delete,
  Get,
  Param,
  Post,
  // Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

class CreateUserDto {
  id!: string;
  name!: string;
  age: number;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): {
    id: string;
    name: string;
    age: number;
  }[] {
    return this.usersService.getUsers();
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    if (!body.id)
      throw new BadRequestException('User not valid: no name field');
    return {
      message: 'Rashad',
      data: body,
    };
  }

  @Get('search')
  getUser(@Query('name') name: string, @Query('age') age: number) {
    return `users name: ${name}, age: ${age}`;
  }

  @Get(':id')
  getUsersById(@Param('id') id: string) {
    return this.usersService.getUsersById(id);
  }

  // @Put(':id')
  // update(@Param('id') id: number) {
  //   return `Update user ${id}`;
  // }

  // @Delete(':id')
  // delete(@Param('id') id: number) {
  //   return `Delet user ${id}`;
  // }
}

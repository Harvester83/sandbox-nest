import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(dto: CreateUserDto): Promise<User> {
    return this.usersRepository.create(dto);
  }

  getUsers(): Promise<User[]> {
    return this.usersRepository.getUsers();
  }
}

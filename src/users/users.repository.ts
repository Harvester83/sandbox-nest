import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@users/user.entity';
import { CreateUserDto } from '@users/dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user = this.repository.create(dto);

    return await this.repository.save(user);
  }

  getUsers(): Promise<User[]> {
    return this.repository.find();
  }
}

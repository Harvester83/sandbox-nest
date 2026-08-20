import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: '21',
      name: 'Jhon',
      email: 'jhon@gmial.com',
      age: 34,
    },
    {
      id: '22',
      name: 'Doe',
      email: 'doe@gmial.com',
      age: 32,
    },
    {
      id: '23',
      name: 'Lee',
      email: 'lee@gmial.com',
      age: 29,
    },
    {
      id: '24',
      name: 'Sem',
      email: 'sem@gmial.com',
      age: 21,
    },
  ];

  getUsers(): {
    id: string;
    name: string;
    email: string;
    age: number;
  }[] {
    return this.users;
  }

  getUsersById(id: string) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
}

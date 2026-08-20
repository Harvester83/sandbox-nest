import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: '21',
      name: 'Jhon',
      age: 34,
    },
    {
      id: '22',
      name: 'Doe',
      age: 32,
    },
    {
      id: '23',
      name: 'Lee',
      age: 29,
    },
    {
      id: '24',
      name: 'Sem',
      age: 21,
    },
  ];

  getUsers(): {
    id: string;
    name: string;
    age: number;
  }[] {
    return this.users;
  }

  getUsersById(id: string) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
}

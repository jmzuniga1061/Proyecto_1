// user.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './temporal';

@Injectable()
export class UserService {
  private users: User[] = []; 

  create(createUserDto: CreateUserDto) {
    const newUser = new User(
      this.users.length + 1,
      createUserDto.name,
      createUserDto.email,
    );
    this.users.push(newUser);
    return newUser; 
  }

  findAll() {
    return this.users;
  }

 findOne(id: number) {
  const user = this.users.find(user => user.id === id);
  return user ? user : null; // nunca devuelve 1 ni undefined
}



  update(id: number, updateUserDto: UpdateUserDto) {
  const index = this.users.findIndex(user => user.id === id);

  if (index === -1) return null;

  this.users[index] = {
    ...this.users[index],
    ...updateUserDto
  };

  return this.users[index];
}

 remove(id: number) {
  const index = this.users.findIndex(user => user.id === id);

  if (index === -1) return null;

  const deleted = this.users[index];

  this.users.splice(index, 1);

  return deleted;
}
}

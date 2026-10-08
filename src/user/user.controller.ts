import { Controller, Get, Post, Body, Patch, Param, Delete, Head, Options,Res } from '@nestjs/common';
import type { Response } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }



@Head(':id')
checkUser(@Param('id') id: string, @Res() res: Response) {
  const user = this.userService.findOne(+id);

  console.log('Resultado de findOne para id', id, ':', user);

  if (user !== null && user !== undefined) {
    return res.status(200).end();
  }
  return res.status(404).end();
}





@Options()
getOptions() {
  return {
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS']
  };
}


}

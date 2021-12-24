/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() body) {
    return this.userService.create(body);
  }
  @Get()
  getAll() {
    return this.userService.findAll();
  }
  @Get('/:id')
  findOne(@Param('id') id) {
    return this.userService.findOne(id);
  }
  @Delete('/:id')
  deleteByID(@Param('id') id) {
    return this.userService.deleteByID(id);
  }
  @Put('/:id')
  updateByID(@Param('id') id, @Body() body) {
    return this.userService.updateByID(id, body);
  }
  @Put('/:id/course')
  updateCourses(@Param('id') id) {
    return this.userService.updateCourses(id);
  }
  @Put('/:id/ban')
  banUser(@Param('id') id){
    return this.userService.banUser(id)
  }
  @Put('/:id/unban')
  unbanUser(@Param('id') id){
    return this.userService.unbanUser(id)
  }
  @Post('/forgot')
  forgotPass(@Body() body){
    const {Email}=body;
    return this.userService.forgotPass(Email);
  }
  @Post('/login')
  login(@Body() body){
    const {Username,Password}=body;
    return this.userService.login(Username,Password);
  }
}

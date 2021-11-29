import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { CreateUserDto } from '../DTOs/users/create-user.dto';
import { UpdateUserDto } from 'src/DTOs/users/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto['numOfCourses'] = 0;
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async findOne(id: string) {
    return this.userModel.findById(id).exec();
  }
  async deleteByID(id: string) {
    return this.userModel.findByIdAndDelete(id).exec();
  }
  async updateByID(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ _id: id }, { ...updateUserDto }).exec();
  }
  async updateCourses(id: string) {
    const user = await this.findOne(id);
    let count = user.numOfCourses;
    return this.userModel
      .updateOne({ _id: id }, { numOfCourses: ++count })
      .exec();
  }
  async login(username: string, password: string) {
    return this.userModel.findOne({ Username: username, Password: password });
  }
}

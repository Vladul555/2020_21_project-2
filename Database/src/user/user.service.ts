import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '../../node_modules/@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { CreateUserDto } from '../DTOs/users/create-user.dto';
import { UpdateUserDto } from 'src/DTOs/users/update-user.dto';

const nodemailer = require('nodemailer');

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    //createUserDto['numOfCourses'] = 0;
    const createdUser = new this.userModel(createUserDto);
    console.log(createUserDto);
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
  async banUser(id: string) {
    const user = await this.findOne(id);
    return this.userModel
      .updateOne({ _id: id }, { bannedStatus: true })
      .exec();
  }
  async unbanUser(id: string) {
    const user = await this.findOne(id);
    return this.userModel
      .updateOne({ _id: id }, { bannedStatus: false })
      .exec();
  }
  async forgotPass(mail:string) {
    const user = await this.userModel.findOne({Email:mail});
    let transporter = nodemailer.createTransport({
     host: 'smtp.mail.yahoo.com',
     port: 587,
     secure: false,
     auth: { user: "glyph.donotreply@yahoo.com",
             pass: "wdjiwdcuuisgsosl"},
     tls: {
       rejectUnauthorized: false
     }
           });
   let info = await transporter.sendMail({
     from: '"Glyph password service" <glyph.donotreply@yahoo.com>',
     to: user.Email,
     subject: "Your Glyph password request",
     text: "Your password is:" + user.Password 
     });
    
  }
  async login(username: string, password: string) {
    return this.userModel.findOne({ Username: username, Password: password });
  }
}

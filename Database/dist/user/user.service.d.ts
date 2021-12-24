import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { CreateUserDto } from '../DTOs/users/create-user.dto';
import { UpdateUserDto } from 'src/DTOs/users/update-user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    deleteByID(id: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updateByID(id: string, updateUserDto: UpdateUserDto): Promise<import("mongodb").UpdateResult>;
    updateCourses(id: string): Promise<import("mongodb").UpdateResult>;
    banUser(id: string): Promise<import("mongodb").UpdateResult>;
    unbanUser(id: string): Promise<import("mongodb").UpdateResult>;
    forgotPass(mail: string): Promise<void>;
    login(username: string, password: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    forgotPass(mail: string): Promise<void>;
}

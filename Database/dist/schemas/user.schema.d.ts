import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    FullName: string;
    Username: string;
    PhoneNumber: string;
    Email: string;
    Password: string;
    private UserType;
    Gender: string;
    numOfCourses: number;
    bannedStatus: boolean;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, any, any>, import("mongoose").Model<Document<User, any, any>, any, any, any>, {}>;

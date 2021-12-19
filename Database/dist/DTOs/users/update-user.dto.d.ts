import { userTypes } from "src/user/User.enum";
export declare class UpdateUserDto {
    FullName?: string;
    Username?: string;
    PhoneNumber?: string;
    Email?: string;
    Password?: string;
    UserType?: userTypes;
    Gender?: string;
    numOfCourses?: number;
}

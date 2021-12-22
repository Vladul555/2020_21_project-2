import { userTypes } from "src/user/User.enum";
export declare class CreateUserDto {
    readonly FullName: string;
    readonly Username: string;
    readonly PhoneNumber: string;
    readonly Email: string;
    readonly Password: string;
    readonly UserType: userTypes;
    readonly Gender: string;
    numOfCourses: number;
    bannedStatus: boolean;
}

import { userTypes } from "src/user/User.enum";

/* eslint-disable prettier/prettier */
export class UpdateUserDto {
  FullName?: string;
  Username?: string;
  PhoneNumber?: string;
  Email?: string;
  Password?: string;
  UserType?: userTypes;
  Gender?: string;
  numOfCourses?: number;
}

export class CreateUserDto {
  readonly FullName: string;
  readonly Username: string;
  readonly PhoneNumber: string;
  readonly Email: string;
  readonly Password: string;
  readonly UserType: boolean;
  readonly Gender: string;
  numOfCourses: number;
}

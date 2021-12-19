import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  public FullName: string;
  @Prop({ required: true })
  public Username: string;
  @Prop({ required: true })
  public PhoneNumber: string;
  @Prop({ required: true })
  public Email: string;
  @Prop({ required: true })
  public Password: string;
  @Prop()
  private UserType: boolean;
  @Prop({ required: true })
  public Gender: string;
  @Prop()
  public numOfCourses: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

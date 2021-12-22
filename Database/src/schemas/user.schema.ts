import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { userTypes } from 'src/user/User.enum';

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
  private UserType: userTypes;
  @Prop({ required: true })
  public Gender: string;
  @Prop({type:Number,default:0})
  public numOfCourses: number;
  @Prop({type:Boolean,default:false})
  public bannedStatus: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

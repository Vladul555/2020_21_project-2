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
  @Prop({type:Boolean,default:false})
  public PyPass: boolean;
  @Prop({type:Boolean,default:false})
  public cPass: boolean;
  @Prop({type:Boolean,default:false})
  public AsmPass: boolean;
  @Prop({type:Boolean,default:false})
  public PyLesson1: boolean;
  @Prop({type:Boolean,default:false})
  public PyLesson2: boolean;
  @Prop({type:Boolean,default:false})
  public PyLesson3: boolean;
  @Prop({type:Boolean,default:false})
  public PyLesson4: boolean;
  @Prop({type:Boolean,default:false})
  public PyLesson5: boolean;
  @Prop({type:Boolean,default:false})
  public cLesson1: boolean;
  @Prop({type:Boolean,default:false})
  public cLesson2: boolean;
  @Prop({type:Boolean,default:false})
  public cLesson3: boolean;
  @Prop({type:Boolean,default:false})
  public cLesson4: boolean;
  @Prop({type:Boolean,default:false})
  public AsmLesson1: boolean;
  @Prop({type:Boolean,default:false})
  public AsmLesson2: boolean;
  @Prop({type:Boolean,default:false})
  public AsmLesson3: boolean;
  @Prop({type:Boolean,default:false})
  public AsmLesson4: boolean;
  @Prop({type:Number,default:0})
  public numOfLessons: number;
  @Prop({type:Boolean,default:false})
  public bannedStatus: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

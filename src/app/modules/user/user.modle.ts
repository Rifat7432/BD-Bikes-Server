import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import config from '../../config';
import { TUser } from './user.interface';


const userSchema = new Schema<TUser>(
  {
    username: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },

    email: {
      type: String,
      unique: true,
      require: true,
    },
    role:{
      type:String,
      enum:['buyer','seller'],
      require: true,
    }
  },
  { timestamps: true },
);

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

export const userModel = model<TUser>('User', userSchema);

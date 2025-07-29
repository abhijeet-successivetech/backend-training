import { object } from "joi";
import mongoose, { Schema, Document, Model } from "mongoose";

enum Role  {
  ADMIN = "admin",
  USER = "user"
}

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: Role;
}
const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
  },
  password: {
    type: String,
    min: 4,
    max: 60,
    required: true,
  },
  role: {
    type: String,
    enum : Object.values(Role),
    min: 4,
    max: 60,
    required: true,

  }

});
const User: Model<IUser> = mongoose.model<IUser>("user",UserSchema);

export default User;

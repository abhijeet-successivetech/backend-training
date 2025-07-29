import mongoose, { Schema, Document, Model } from "mongoose";

export interface IStudent extends Document {
  name: string;
  city: string;
  age: number;
}

const StudentSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  city: {
    type: String,
    required: true,
    minlength: 2,
  },
  age: {
    type: Number,
    min: 18,
    max: 60,
    required: true,
  },
});
const StudentModel: Model<IStudent> = mongoose.model<IStudent>("student",StudentSchema);

export default StudentModel;

import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICountry extends Document {
  name: string;
  code: string;
}

const CountrySchema: Schema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true }
});

const CountryModel: Model<ICountry> = mongoose.model<ICountry>("Country", CountrySchema);
export default CountryModel;

import mongoose, { Document, Schema } from 'mongoose';
import { ActorDbObject, Gender } from '../../common/generatedTypes';

export type ActorModel = ActorDbObject & Document;

const ActorSchema: Schema = new Schema({
  name: String,
  birthName: String,
  birthDate: Date,
  birthPlace: String,
  gender: { type: String, enum: [Gender.Male, Gender.Female] },
  nicknames: [String],
  heightCentimeters: Number
});

export default mongoose.model<ActorModel>('Actor', ActorSchema);

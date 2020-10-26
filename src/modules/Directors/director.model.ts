import mongoose, { Document, Schema } from 'mongoose';
import { DirectorDbObject, Gender } from '../../common/generatedTypes';

export type DirectorModel = DirectorDbObject & Document;

const DirectorSchema: Schema = new Schema({
  name: { type: String },
  birthName: { type: String },
  birthDate: { type: Date },
  birthPlace: { type: String },
  gender: { type: String, enum: [Gender.Male, Gender.Female] },
  genres: [{ type: Schema.Types.ObjectId, ref: 'Genre' }]
});

export default mongoose.model<DirectorModel>('Director', DirectorSchema);

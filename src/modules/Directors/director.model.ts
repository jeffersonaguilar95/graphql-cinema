import mongoose, { Document, Schema } from 'mongoose';
import { DirectorDbObject } from '../../common/generatedTypes';

export type DirectorModel = DirectorDbObject & Document;

const DirectorSchema: Schema = new Schema({
  name: String,
  birthName: String,
  birthDate: Date,
  birthPlace: String,
  gender: String,
  genres: [{ type: Schema.Types.ObjectId, ref: 'Genre' }]
});

export default mongoose.model<DirectorModel>('Director', DirectorSchema);

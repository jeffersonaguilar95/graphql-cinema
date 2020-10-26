import mongoose, { Schema, Document } from 'mongoose';
import { GenreDbObject } from '../../common/generatedTypes';

export type GenreModel = GenreDbObject & Document;

const GenreSchema: Schema = new Schema({
  type: { type: String, unique: true }
});

export default mongoose.model<GenreModel>('Genre', GenreSchema);

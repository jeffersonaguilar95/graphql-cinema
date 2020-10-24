import mongoose, { Schema } from 'mongoose';
import { GenreDbObject } from '../../common/generatedTypes';

const GenreSchema: Schema = new Schema({
  type: { type: String, unique: true }
});

export default mongoose.model<GenreDbObject>('Genre', GenreSchema);

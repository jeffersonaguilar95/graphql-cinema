import mongoose, { Document, Schema } from 'mongoose';
import { MovieDbObject } from '../../common/generatedTypes';

export type MovieModel = MovieDbObject & Document;

const MovieSchema: Schema = new Schema({
  title: { type: String, unique: true },
  releaseDate: Date,
  releaseYear: Number,
  description: String,
  shortDescription: String,
  originalLanguage: String,
  dubbingLanguages: [String],
  rating: Number,
  duration: Number,
  genre: { type: Schema.Types.ObjectId, ref: 'Genre' },
  director: { type: Schema.Types.ObjectId, ref: 'Director' },
  actors: [{ type: Schema.Types.ObjectId, ref: 'Actor' }]
});

export default mongoose.model<MovieModel>('Movie', MovieSchema);

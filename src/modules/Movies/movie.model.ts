import mongoose, { Document, Schema } from 'mongoose';
import { MovieDbObject } from '../../common/generatedTypes';

export type MovieModel = MovieDbObject & Document;

const MovieSchema: Schema = new Schema({
  title: { type: String, unique: true },
  releaseDate: { type: Date },
  releaseYear: { type: Number },
  description: { type: String },
  shortDescription: { type: String },
  originalLanguage: { type: String },
  dubbingLanguages: [{ type: String }],
  rating: { type: Number },
  duration: { type: Number },
  genre: { type: Schema.Types.ObjectId, ref: 'Genre' },
  director: { type: Schema.Types.ObjectId, ref: 'Director' },
  actors: [{ type: Schema.Types.ObjectId, ref: 'Actor' }]
});

export default mongoose.model<MovieModel>('Movie', MovieSchema);

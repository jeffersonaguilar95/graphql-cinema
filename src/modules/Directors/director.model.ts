import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { DirectorDbObject, Gender } from '../../common/generatedTypes';

const DirectorSchema: Schema<DirectorDbObject> = new Schema({
  name: { type: String },
  birthName: { type: String },
  birthDate: { type: Date },
  birthPlace: { type: String },
  gender: { type: String, enum: [Gender.Male, Gender.Female] },
  genres: [{ type: Schema.Types.ObjectId, ref: 'Genre' }]
});

DirectorSchema.plugin(mongoosePaginate);

export default mongoose.model<DirectorDbObject>('Director', DirectorSchema);

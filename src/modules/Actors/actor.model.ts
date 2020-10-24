import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { ActorDbObject, Gender } from '../../common/generatedTypes';

const ActorSchema: Schema<ActorDbObject> = new Schema({
  name: { type: String },
  birthName: { type: String },
  birthDate: { type: Date },
  birthPlace: { type: String },
  gender: { type: String, enum: [Gender.Male, Gender.Female] },
  nicknames: [{ type: String }],
  heightCentimeters: Number
});

ActorSchema.plugin(mongoosePaginate);

export default mongoose.model<ActorDbObject>('Actor', ActorSchema);

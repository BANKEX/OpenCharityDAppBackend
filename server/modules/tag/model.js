import mongoose, { Schema } from 'mongoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';

const schema = new Schema({
  tag: {
    type: String,
    required: true,
    unique: true,
  },
  use: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: false,
});

schema.plugin(autoIncrement, { model: 'tag', field: 'tagID', startAt: 1 });
schema.statics.findOneOrCreate = async function findOneOrCreate(condition) {
  const self = this;
  const result = await self.findOne(condition);
  return result
      ? result
      : await self.create(condition);
};
export default mongoose.model('tag', schema);

import mongoose, { Schema } from 'mongoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';

const schema = new Schema({
  source: {
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

schema.plugin(autoIncrement, { model: 'source', field: 'sourceID', startAt: 1 });
export default mongoose.model('source', schema);

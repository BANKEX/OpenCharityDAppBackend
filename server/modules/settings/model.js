import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  type: Number,
  list: [String],
  IncomingDonation: Object,
  CharityEvent: Object,
}, {
  timestamps: false,
});

export default mongoose.model('setting', schema);

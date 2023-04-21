import mongoose from 'mongoose';

const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: 'incomplete',
  },
  descriptions: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);

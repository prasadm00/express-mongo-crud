import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    age: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);

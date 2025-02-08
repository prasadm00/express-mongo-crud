import mongoose from 'mongoose';
import config from '../config/config.js';

const connectDB = async () => {
  try {
    await mongoose.connect(config.database.mongoURL);
    console.log(`MongoDB Connected: ${config.database.mongoURL}`);

  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};

export default connectDB;

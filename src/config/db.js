import mongoose from 'mongoose';
import logger from '../utils/logger.js';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    logger.info('MongoDB connected');
  } catch (err) {
    logger.error('MongoDB connection error: ' + err);
    process.exit(1); // Termina el proceso con un error
  }
};

export default connectDB;

// lib/mongodb.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error('Please define MONGODB_URI in .env.local');

let cached = global.mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) {
    console.log("✅ Using cached MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🔄 Connecting to MongoDB...");
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });

  }

  cached.conn = await cached.promise;
  console.log("✅ MongoDB connected");
  return cached.conn;
}

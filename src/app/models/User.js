import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  method: {
    type: String,
    enum: ['local', 'google', 'facebook'],
    required: true
  },
  local: {
    email: {
      type: String,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    key: {
      type: String,
      required: true
    }
  }
});
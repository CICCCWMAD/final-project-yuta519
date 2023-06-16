import mongoose from "mongoose";

export const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  chatrooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "chatrooms" }]
});

export const User = mongoose.model('users', usersSchema);

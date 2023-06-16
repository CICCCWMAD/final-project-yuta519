import mongoose from 'mongoose';

const chatroomSchema = new mongoose.Schema({
  title: { type: String, required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }]
});

export const Chatroom = mongoose.model('chatrooms', chatroomSchema);

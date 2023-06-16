import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  message: { type: String, required: true },
  post_at: { type: Date, required: true },
  chatroomId: { type: String },
  user: {
    id: { type: String },
    email: { type: String },
    name: { type: String },
  }
});

export const Chat = mongoose.model('chats', chatSchema);

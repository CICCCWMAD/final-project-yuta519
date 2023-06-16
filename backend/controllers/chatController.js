import { Chat } from "../models/chats.js";

export const getChatsByChatroomId = async (req, res) => {
  const { chatroomId } = req.query;
  // const chatrooms = await Chat.find({ chatroom: {_id: chatroomId} }).populate("unit");
  const chatrooms = await Chat.find({ chatroomId: chatroomId });
  res.json(chatrooms);
};

export const createChats = async (req, res) => {
  const { message, chatroomId, userId, userEmail, userName } = req.body;
  const chat = new Chat({
      message,
      post_at: Date(),
      chatroomId,
      user: {
        id: userId,
        name: userName,
        email: userEmail
      }
    })
  await chat.save();
  res.send('aaaaaaaaa');
};

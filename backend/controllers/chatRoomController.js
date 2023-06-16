import { Chatroom } from "../models/chatroom.js";

export const createRoom = async (req, res) => {
  const { title } = req.body;
  const chatroom = new Chatroom({ title });
  await chatroom.save();
  res.send('Created chatroom');
};

export const getRooms = async (_, res) => {
  const chatrooms = await Chatroom.find();
  res.json(chatrooms);
};

export const getRoomById = async (req, res) => {
  const { _id } = req.params;
  const chatroom = await Chatroom.findOne({_id });
  res.json(chatroom);
};



export const deleteRoom = async (req, res) => {};
export const updateRoom = async (req, res) => {};

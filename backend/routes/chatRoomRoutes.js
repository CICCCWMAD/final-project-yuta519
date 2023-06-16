import express from 'express';
import { createRoom, getRooms, getRoomById } from '../controllers/chatRoomController.js';

var chatroomRoute = express.Router();

chatroomRoute.route('/').post(createRoom);
chatroomRoute.route('/').get(getRooms);
chatroomRoute.route('/:_id').get(getRoomById);

export default chatroomRoute;

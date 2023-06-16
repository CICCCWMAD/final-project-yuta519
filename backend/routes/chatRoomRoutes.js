import express from 'express';
import { createRoom, getRooms } from '../controllers/chatRoomController.js';

var chatroomRoute = express.Router();

chatroomRoute.route('/').post(createRoom);
chatroomRoute.route('/').get(getRooms);

export default chatroomRoute;

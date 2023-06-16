import express from 'express';
import { createChats, getChatsByChatroomId } from '../controllers/chatController.js';

var chatRoute = express.Router();

chatRoute.route('/').get(getChatsByChatroomId);
chatRoute.route('/').post(createChats);

export default chatRoute;

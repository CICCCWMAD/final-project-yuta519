import path from'path';
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createDbConnection } from './helpers/dbHelper.js'
import authenticationRoute from './routes/authenticationRoutes.js';
import chatRoomRoute from './routes/chatRoomRoutes.js'
import chatRoute from './routes/chatRoutes.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = createDbConnection(process.env.DB_URL)

db.on('error', (error) => console.error(error));
db.once('open', () => console.error('connected to database'));

app.use('/api/auth', authenticationRoute);
app.use('/api/chatrooms', chatRoomRoute);
app.use('/api/chats', chatRoute);
// app.use('/api/users', )
// app.use('/api/auth', (req, res, next)=> res.send('hello'));
// app.use('/api/posts', chatRoomRoute);

app.listen(port, () => {
  console.log('Server is running');
});

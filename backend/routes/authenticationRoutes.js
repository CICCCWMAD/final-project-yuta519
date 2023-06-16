import express from 'express';

var authenticationRoute = express.Router();

import {signup, login, updateMe} from '../controllers/authenticationController.js'

authenticationRoute.route('/register').post(signup);
authenticationRoute.route('/login').post(login);
authenticationRoute.route('/me').patch(updateMe);

export default authenticationRoute;

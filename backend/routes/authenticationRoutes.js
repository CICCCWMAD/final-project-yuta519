import express from 'express';

var authenticationRoute = express.Router();

import {registerUser, loginUser} from '../controllers/authenticationController.js'

authenticationRoute.route('/register').post(registerUser);
authenticationRoute.route('/login').post(loginUser);

export default authenticationRoute;

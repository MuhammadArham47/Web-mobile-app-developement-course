import express from 'express';
import { userCreate, userLogin, userLogout, userVerifier } from '../controllers/user.controller.js';
import verifyuser from '../middleware/auth.middleware.js';

const routes = express.Router();

routes.post('/user/register', userCreate);
routes.post('/user/login', userLogin);
routes.get('/user/verify', verifyuser, userVerifier);
routes.post('/user/logout', verifyuser, userLogout);

export default routes;
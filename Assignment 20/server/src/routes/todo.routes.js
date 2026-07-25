import express from 'express';
import verifyuser from '../middleware/auth.middleware.js';
import { createTodo, deleteTodo, getTodos, singleTodo, updateTodo } from '../controllers/todo.controller.js';
import upload from '../middleware/multer.js';
const routes = express.Router();

routes.post('/createTodo', verifyuser, upload.single('file'), createTodo);
routes.get('/getTodos', verifyuser, getTodos);
routes.get('/singleTodo/:id', verifyuser, singleTodo);
routes.patch('/updateTodo/:id', verifyuser, upload.single('file'), updateTodo);
routes.delete('/deleteTodo/:id', verifyuser, deleteTodo);

export default routes;
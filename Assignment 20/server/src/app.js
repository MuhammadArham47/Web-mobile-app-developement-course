import express from 'express';
import core from 'cors';
import userRoutes from './routes/user.routes.js';
import todoRoutes from './routes/todo.routes.js';

const app = express();

app.use(core({ origin: ["http://localhost:5173", "https://taskflow-pro-mern-stack.vercel.app"], credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', userRoutes);
app.use('/todo', todoRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

export default app
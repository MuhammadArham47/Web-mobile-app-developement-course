import'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRoutes from './src/routes/user.routes.js';
import todoRoutes from './src/routes/todo.routes.js';
import { connectDB } from './src/config/db.js';

const app = express();

app.use(cors({ origin: ["http://localhost:5173", "https://taskflow-pro-mern-stack.vercel.app"], credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

await connectDB();

app.use('/auth', userRoutes);
app.use('/todo', todoRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
}); 

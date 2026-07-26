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


let isConnected = false;

app.use(async (req, res, next) => {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      return res.status(500).json({ error: "Database connection failed" });
    }
  }
  next();
}); 

app.use('/auth', userRoutes);
app.use('/todo', todoRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

export default app;
// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`app listening on port ${port}`);
// }); 

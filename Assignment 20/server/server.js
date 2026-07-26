import'dotenv/config';
import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";

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

export default app
// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`app listening on port ${port}`);
// }); 

import'dotenv/config';
import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";

let isConnected = false;

async function connectToMongoDB() {
    try {

        await connectDB();
        isConnected = true;
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

app.use((req, res, next) => {
    if (!isConnected) {
        connectToMongoDB();
    }
    next();
})

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`app listening on port ${port}`);
// }); 

export default app
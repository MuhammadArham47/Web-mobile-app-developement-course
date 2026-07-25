import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully");
        return mongoose;
    } catch (error) {
        console.log(error);
    }
};

const disconnectDB = async () => {
    await mongoose.disconnect();
    console.log("Database Disconnected successfully");
};

export { connectDB, disconnectDB };
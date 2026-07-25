import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        require: true,
        unique: true
    },
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    status: {
        type: String,
        default: "active"
    },
    role: {
        type: String,
        default: "student"
    },
    photo: {
        url: { type: String, default: "" },
        publicId: { type: String, default: "" }
    },
}, { timestamps: true });

const userModel = mongoose.model('users', userSchema);

export default userModel;
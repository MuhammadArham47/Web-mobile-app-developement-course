import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    uid: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    location: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        default: "inComplete"
    },
    visibility: {
        type: String,
        default: "private"
    },
    dueDate: {
        type: String,
        require: true
    },
    image: {
        url: { type: String, default: "" },
        publicId: { type: String, default: "" }
    }
}, { timestamps: true });

const todoModel = mongoose.model("todo", todoSchema);

export default todoModel;
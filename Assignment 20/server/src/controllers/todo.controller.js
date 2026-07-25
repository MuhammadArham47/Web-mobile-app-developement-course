import cloudinary from "../config/cloudinary.js";
import todoModel from "../models/todo.js";
import { randomId } from "../utils/global.js";
import streamifier from 'streamifier';


const createTodo = async (req, res) => {
    try {

        const { uid } = req.user;
        const { title, description, dueDate, location, status, visibility } = req.body;

        if (!title || !description || !dueDate) {
            return res.status(400).json({ message: "All fields are required", isError: true });
        };

        let fileUrl = "";
        let publicId = "";
        if (req.file) {
            const uploadStream = await new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream({ folder: "todos", resource_type: "auto" }, (error, result) => {
                    if (error) return reject(error)
                    resolve(result);
                })
                streamifier.createReadStream(req.file.buffer).pipe(stream);
            });
            fileUrl = uploadStream.secure_url;
            publicId = uploadStream.public_id;
        };

        const todoData = { uid, title, description, dueDate, location, status, visibility, image: { url: fileUrl, publicId: publicId } };
        todoData.id = randomId();

        const todo = await todoModel.create(todoData);

        return res.status(200).json({ message: "Todo created successfully", isError: false, data: todo });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Todo not created, Internal server error", isError: true, error });
    }
};

const getTodos = async (req, res) => {
    try {

        const { uid } = req.user;

        const todos = await todoModel.find({ uid });

        if (!todos) {
            return res.status(400).json({ message: "Todo not found", isError: true });
        };

        return res.status(200).json({ message: "Todos found successfully", isError: false, data: todos });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Todo not created, Internal server error", isError: true, error });
    }
};

const singleTodo = async (req, res) => {
    try {

        const { uid } = req.user;

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "Todo not found", isError: true });
        };

        const todo = await todoModel.findOne({ uid, id });

        if (!todo) {
            return res.status(400).json({ message: "Todo not found", isError: true });
        };

        return res.status(200).json({ message: "Todo found successfully", isError: false, data: todo });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Todo not created, Internal server error", isError: true, error });
    }
};

const updateTodo = async (req, res) => {
    try {

        const { uid } = req.user;

        const { id } = req.params;

        const { title, description, dueDate, location, status, visibility } = req.body;

        if (!id) {
            return res.status(400).json({ message: "Todo not found", isError: true });
        };

        const existingTodo = await todoModel.findOne({ uid, id });

        if (!existingTodo) {
            return res.status(400).json({ message: "Todo not found", isError: true });
        };

        let fileUrl = "";
        let publicId = "";
        const updateTodos = {};

        if (title !== undefined) updateTodos.title = title;
        if (description !== undefined) updateTodos.description = description;
        if (dueDate !== undefined) updateTodos.dueDate = dueDate;
        if (location !== undefined) updateTodos.location = location;
        if (status !== undefined) updateTodos.status = status;
        if (visibility !== undefined) updateTodos.visibility = visibility;
        if (req.file) {

            if (existingTodo.image && existingTodo.image.publicId) {
                try {
                    await cloudinary.uploader.destroy(existingTodo.image.publicId);
                } catch (error) {
                    console.log('Failed to delete the image', error);
                }
            }

            const uploadStream = await new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream({ folder: "todos", resource_type: "auto" }, (error, result) => {
                    if (error) return reject(error)
                    resolve(result);
                })
                streamifier.createReadStream(req.file.buffer).pipe(stream);
            });
            fileUrl = uploadStream.secure_url;
            publicId = uploadStream.public_id;

            updateTodos.image = { url: fileUrl, publicId: publicId };
        };
        updateTodos.id = randomId();

        const todo = await todoModel.findOneAndUpdate({ uid, id }, { $set: updateTodos }, { new: true, runValidators: true });

        return res.status(200).json({ message: "Todo updated successfully", isError: false, data: todo });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Todo not created, Internal server error", isError: true, error });
    }
};

const deleteTodo = async (req, res) => {
    try {

        const { uid } = req.user;

        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "Todo not found", isError: true });
        };

        const todo = await todoModel.findOneAndDelete({ uid, id });

        return res.status(200).json({ message: "Todo deleted successfully", isError: false, success: true,  data: todo });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Todo not created, Internal server error", isError: true, error });
    }
};

export { createTodo, getTodos, singleTodo, updateTodo, deleteTodo };
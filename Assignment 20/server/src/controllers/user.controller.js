import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import userModel from "../models/auth.js";
import { isValidEmail, randomId } from "../utils/global.js";

const userCreate = async (req, res) => {
    try {

        const { fullName, email, password, status, role } = req.body;

        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "All fields are required", isError: true });
        };

        if (fullName.length < 3) {
            return res.status(400).json({ message: "Full name must be at least 3 characters long", isError: true });
        };

        if (!isValidEmail(email)) {
            return res.status(400).json({ message: "Please enter a valid email address", isError: true });
        };

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long", isError: true });
        };

        const isExist = await userModel.findOne({ email });

        if (isExist) {
            return res.status(400).json({ message: "User already exist", isError: true });
        };

        const hashedPassword = await bcrypt.hash(password, 10);

        const userData = { fullName, email, password: hashedPassword, status, role };
        userData.uid = randomId();

        const user = await userModel.create(userData);

        return res.status(200).json({ message: "User created successfully", isError: false, data: user, success: true });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "User not registered, Internal server error", isError: true, error });
    }
};

const userLogin = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required", isError: true });
        };

        if (!isValidEmail(email)) {
            return res.status(400).json({ message: "Please enter a valid email address", isError: true });
        };

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials", isError: true });
        };

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials", isError: true });
        };

        if (user.status === "inActive") {
            user.status = "active";
            await user.save();
        };

        const token = jwt.sign({ uid: user.uid }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });

        return res.status(200).json({ message: "User logged in successfully", isError: false, success: true, token, data: user });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "User not registered, Internal server error", isError: true, error });
    }
};

const userVerifier = async (req, res) => {
    try {

        const { uid } = req.user;

        const user = await userModel.findOne({ uid }).select("-password");

        if (!user) {
            return res.status(400).json({ message: "User not found", isError: true });
        };

        return res.status(200).json({ message: "User found successfully", isError: false, data: user });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "User not registered, Internal server error", isError: true, error });
    }
};

const userLogout = async (req, res) => {
    try {

        const { uid } = req.user;

        const user = await userModel.findOne({ uid });

        if (!user) {
            return res.status(400).json({ message: "User not found", isError: true });
        };

        user.status = "inActive";

        await user.save();

        return res.status(200).json({ message: "User logged out successfully", isError: false, success: true });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "User not registered, Internal server error", isError: true, error });
    }
}

export { userCreate, userLogin, userVerifier, userLogout };
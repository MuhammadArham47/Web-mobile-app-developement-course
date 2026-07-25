import jwt from 'jsonwebtoken';

const verifyuser = async (req, res, next) => {
    try {

        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "Unauthorized", isError: true });
        };

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.user = decoded;

        next();

    } catch (error) {
        console.log(error);
    }
};

export default verifyuser;
const isValidEmail = (email) => {
    if (!email || typeof email !== "string") {
        return false
    };

    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return pattern.test(email);
};

const randomId = () => Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

export { isValidEmail, randomId };
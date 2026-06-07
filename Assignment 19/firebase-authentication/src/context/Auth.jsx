import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const initialState = { isAuth: false, user: {} };

const reducer = (state, { type, payload }) => {
    const { user } = payload || {};
    switch (type) {
        case "SET_LOGIN":
            return { isAuth: true, user };
        case "SET_PROFILE":
            return { ...state, user };
        case "SET_LOGOUT":
            return initialState;
        default:
            return state;
    };
};

const Auth = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            dispatch({ type: "SET_LOGIN", payload: { user } });
        };

    }, []);

    const [loading, setLoading] = useState(false);

    const logout = () =>  signOut(auth).then(() => {
        console.log("User signed out successfully");
        dispatch({ type: "SET_LOGOUT" });
        navigate('/');
        window.toastify("Logged out successfully", "success");
    }).catch((error) => {
        console.error("Error signing out:", error);
    });

    return (
        <AuthContext.Provider value={{ ...state, dispatch, logout, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);

export default Auth;
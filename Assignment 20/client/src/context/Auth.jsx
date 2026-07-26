import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast'
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

    const navigate = useNavigate();

    const [state, dispatch] = useReducer(reducer, initialState);
    const [loading, setLoading] = useState(false);

    const registerUser = async (formData) => {
        try {

            const response = await axios.post('https://expressjs-test-deployment-six.vercel.app/auth/user/register', formData);

            const { data, message, isError, success } = response.data;

            if (isError) {
                return toast.error(message);
            };

            if (success) {
                toast.success(message);
            };

            return { success: true };

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    const userLogin = async (formData) => {
        try {

            const response = await axios.post('https://expressjs-test-deployment-six.vercel.app/auth/user/login', formData);

            const { isError, token, success, data, message } = response.data;

            if (isError) {
                return toast.error(message);
            };

            if (success && token) {
                localStorage.setItem('token', token);
                dispatch({ type: "SET_LOGIN", payload: { user: data } });
                toast.success(message);
            }
            return { success: true };
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    const userVerify = async () => {
        try {
            setLoading(true);

            const token = localStorage.getItem('token');

            if (!token) {
                return dispatch({ type: "SET_LOGOUT" });
            };

            const response = await axios.get('https://expressjs-test-deployment-six.vercel.app/auth/user/verify', {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            const { isError, data } = response.data;

            if (isError) {
                return dispatch({ type: "SET_LOGOUT" });
            };

            if (data) {
                dispatch({ type: "SET_LOGIN", payload: { user: data } });
            };

            return { success: true };
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    const userLogout = async () => {
        try {

            const token = localStorage.getItem('token');

            const response = await axios.post('https://expressjs-test-deployment-six.vercel.app/auth/user/logout', {}, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            const { isError, success, message } = response.data;

            if (isError) {
                return toast.error(message);
            };

            if (success) {
                toast.success(message);
                localStorage.removeItem('token');
                navigate('/');
                dispatch({ type: "SET_LOGOUT" });

            };

            return { success: true };

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        userVerify();
    }, []);


    return (
        <AuthContext.Provider value={{ ...state, dispatch, registerUser, userLogin, userLogout, loading }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);

export default Auth;
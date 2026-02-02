import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
    const navigate = useNavigate();
    
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [user, setUser] = useState(null);
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);

    // Función para obtener todas las atracciones
    const getPlaces = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/attractions`);
            if (response.data.success) {
                setPlaces(response.data.attractions);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    // Función para login
    const login = async (email, password) => {
        try {
            setLoading(true);
            const response = await axios.post(`${backendUrl}/api/auth/login`, {
                email,
                password
            });

            if (response.data.success) {
                const userToken = response.data.token;
                setToken(userToken);
                localStorage.setItem('token', userToken);
                toast.success('Login successful!');
                navigate('/touristd');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    }

    // Función para registro
    const register = async (name, email, password) => {
        try {
            setLoading(true);
            const response = await axios.post(`${backendUrl}/api/auth/register`, {
                name,
                email,
                password
            });

            if (response.data.success) {
                const userToken = response.data.token;
                setToken(userToken);
                localStorage.setItem('token', userToken);
                toast.success('Registration successful!');
                navigate('/touristd');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    }

    // Función para logout
    const logout = () => {
        setToken('');
        setUser(null);
        localStorage.removeItem('token');
        navigate('/login');
        toast.success('Logged out successfully');
    }

    // Cargar datos al iniciar
    useEffect(() => {
        getPlaces();
    }, []);

    const value = {
        backendUrl,
        token,
        setToken,
        user,
        setUser,
        places,
        setPlaces,
        loading,
        login,
        register,
        logout,
        getPlaces
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;

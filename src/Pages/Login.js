import React, { useState, useContext , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const { setIsAuthenticated, setUserData ,  isAuthenticated } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (isAuthenticated ) {
        navigate("/landing");
      } 
    }, [])
    

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:3001/user/login", {
                email: formData.email,
                password: formData.password,
            });
            // Save token to localStorage
            localStorage.setItem("authToken", response.data.token);
            navigate("/landing");
            console.log("Login Successful:", response.data);
            setUserData({
                user: response.data.user,
            });
            setIsAuthenticated(true);
            alert("Login Successful!");
        } catch (error) {
            console.error("Error during login:", error);
            alert("Login failed. Please check your credentials and try again.");
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="bg-[#1D2026] p-8 rounded-lg shadow-lg w-full max-w-md animate-fadeIn">
                <h1 className="text-3xl font-bold text-center text-white mb-6">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-[#525252] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-[#525252] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#151414] text-white font-semibold p-3 rounded-lg hover:bg-pink-600 transition duration-300"
                        disabled={loading}
                    >
                        Login
                    </button>
                </form>
                <p className="text-white text-center mt-4">
                    Don&apos;t have an account? <a href="/signup" className="text-pink-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;

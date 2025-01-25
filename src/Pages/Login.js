import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bgImg from "../assests/bgimg.jpeg";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const { setIsAuthenticated, setUserData, isAuthenticated } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/landing");
        }
    }, [isAuthenticated, navigate]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("https://fashion-back-ytsh.onrender.com/user/login", {
                email: formData.email,
                password: formData.password,
            });
            localStorage.setItem("authToken", response.data.token);
            navigate("/landing");
            setUserData(response.data.user);
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
        <div
            className="flex justify-center items-center min-h-screen"
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="bg-[#f9f7f4] p-8 rounded-lg shadow-lg w-full max-w-md animate-fadeIn">
                <h1 className="text-3xl font-bold text-center text-[#5a4a42] mb-6">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-[#5a4a42] mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-[#ebe6e1] text-[#5a4a42] focus:outline-none focus:ring-2 focus:ring-[#d2c2b0]"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-[#5a4a42] mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-[#ebe6e1] text-[#5a4a42] focus:outline-none focus:ring-2 focus:ring-[#d2c2b0]"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#5a4a42] text-white font-semibold p-3 rounded-lg hover:bg-[#d2c2b0] transition duration-300"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
                <p className="text-[#5a4a42] text-center mt-4">
                    Don&apos;t have an account? <a href="/signup" className="text-[#8a7162] hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;

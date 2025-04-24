import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bgImg from "../assests/bgimg.jpeg";
import { AuthContext } from "../context/AuthContext";

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

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
        const { firstName, lastName, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post("https://fashion-back-production.up.railway.app/user/signup", {
                firstName,
                lastName,
                email,
                password,
            });

            console.log("Signup Successful:", response.data);
            alert("Signup Successful! Please login.");
        } catch (error) {
            console.error("Error during signup:", error);
            alert("Signup failed. Please try again.");
        }
    };

    return (
        <div
            className="py-6 flex justify-center items-center min-h-screen"
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="bg-[#f9f7f4] p-8 rounded-lg shadow-lg w-full max-w-md animate-fadeIn">
                <h1 className="text-3xl font-bold text-center text-[#5a4a42] mb-6">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-[#5a4a42] mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-[#ebe6e1] text-[#5a4a42] focus:outline-none focus:ring-2 focus:ring-[#d2c2b0]"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-[#5a4a42] mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-[#ebe6e1] text-[#5a4a42] focus:outline-none focus:ring-2 focus:ring-[#d2c2b0]"
                            placeholder="Enter your last name"
                        />
                    </div>
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
                    <div className="mb-4">
                        <label className="block text-[#5a4a42] mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-[#ebe6e1] text-[#5a4a42] focus:outline-none focus:ring-2 focus:ring-[#d2c2b0]"
                            placeholder="Create a password"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-[#5a4a42] mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-[#ebe6e1] text-[#5a4a42] focus:outline-none focus:ring-2 focus:ring-[#d2c2b0]"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#5a4a42] text-white font-semibold p-3 rounded-lg hover:bg-[#d2c2b0] transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-[#5a4a42] text-center mt-4">
                    Already have an account? <a href="/login" className="text-[#8a7162] hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
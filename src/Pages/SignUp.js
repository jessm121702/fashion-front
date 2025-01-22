// SignUpPage.js
import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

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
            const response = await axios.post("http://localhost:3001/user/signup", {
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
        <div className="flex items-center justify-center min-h-screen bg-[#292828]">
            <div className="bg-[#1D2026] p-8 rounded-lg shadow-lg w-full max-w-md animate-fadeIn">
                <h1 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-[#525252] text-white focus:outline-none focus:ring-2 focus:ring-[#4cded4]"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-[#525252] text-white focus:outline-none focus:ring-2 focus:ring-[#4cded4]"
                            placeholder="Enter your last name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-[#525252] text-white focus:outline-none focus:ring-2 focus:ring-[#4cded4]"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-[#525252] text-white focus:outline-none focus:ring-2 focus:ring-[#4cded4]"
                            placeholder="Create a password"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-[#525252] text-white focus:outline-none focus:ring-2 focus:ring-[#4cded4]"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#4cded4] text-[#292828] font-semibold p-3 rounded-lg hover:bg-[#3bcec4] transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-white text-center mt-4">
                    Already have an account? <a href="/login" className="text-[#4cded4] hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;

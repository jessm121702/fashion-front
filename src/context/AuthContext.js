import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (token) {
            fetchUserData(token);
        } else {
            setIsInitialized(true);
        }
    }, []);

    const fetchUserData = async (token) => {
        console.log("run fetchUserData 🙌🙌 ", token);

        const config = {
            method: "get",
            maxBodyLength: Infinity,
            url: "https://fashion-back-ytsh.onrender.com/user/secure-route",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        };

        try {
            const response = await axios.request(config);
            setUserData(response.data.user);
            setIsAuthenticated(true);
        } catch (error) {
            console.error("Failed to fetch user data:", error);
            logout();
        } finally {
            setIsInitialized(true);
        }
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setIsAuthenticated(false);
        setUserData(null);
    };

    return (
        <AuthContext.Provider value={{ setIsAuthenticated, isAuthenticated, logout, isInitialized, userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
};

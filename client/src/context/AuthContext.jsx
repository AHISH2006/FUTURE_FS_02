// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      const normalizedUser = {
        ...res.data.user,
        id: res.data.user.id || res.data.user._id,
      };
      setUser(normalizedUser);
      localStorage.setItem("user", JSON.stringify(normalizedUser));
      return true;
    } catch (err) {
      console.error("Login failed:", err);
      return false;
    }
  };

  // ✅ This is the robust logout function.
  const logout = () => {
    // 1. Clear the user state within the application.
    setUser(null);
    // 2. Remove all user-related data from browser storage.
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
  };

  const authValue = { user, login, logout };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

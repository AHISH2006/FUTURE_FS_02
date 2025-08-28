// src/pages/Register.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Background from "../components/Background";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.msg || "Signup failed!");
      } else {
        setMessage("Signup successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 1500);
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a0033] animate-fadeIn">
      <Background/>
      <div className="relative w-[400px] p-[5px] bg-[#0d0d0d] rounded-2xl shadow-lg shadow-purple-900 overflow-hidden">
        <div className="relative z-20 p-10 bg-[#0d0d0dcc] rounded-[15px] backdrop-blur-md">
          <h2 className="text-center text-neon-blue text-2xl font-bold mb-6 animate-slideDown">
            Create a New Account
          </h2>

          {message && (
            <p className="text-center text-red-500 mb-4">{message}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#111] border border-[#333] text-neon-blue rounded-md outline-none transition focus:border-neon-blue"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#111] border border-[#333] text-neon-blue rounded-md outline-none transition focus:border-neon-blue"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#111] border border-[#333] text-neon-blue rounded-md outline-none transition focus:border-neon-blue"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#111] border border-[#333] text-neon-blue rounded-md outline-none transition focus:border-neon-blue"
            />

            <button
              type="submit"
              className="w-full py-3 border-2 border-neon-blue text-neon-blue rounded-full font-semibold transition duration-300 hover:bg-neon-blue hover:text-black hover:shadow-neon-blue"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-neon-blue hover:underline hover:text-neon-blue-light"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// src/Pages/Login.js
import React, { useState } from "react";
import axios from "axios";
import "../Styles/Login.css";
import { ToastContainer, toast } from "react-toastify";
// import { json } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username: formData.username,
        password: formData.password,
      });
      //   console.log(response.data);
      localStorage.setItem("token", JSON.stringify(response.data));
      toast.success("Login successful!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to login.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <ToastContainer
        autoClose={2000}
        style={{ fontSize: "0.8rem" }}
        // hideProgressBar={"true"}
        position="top-right"
      />
    </div>
  );
};

export default Login;

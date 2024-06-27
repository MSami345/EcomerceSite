// src/Pages/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Register.css';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    city: '',
    street: '',
    number: '',
    zipcode: '',
    lat: '',
    long: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://fakestoreapi.com/users', {
        email: formData.email,
        username: formData.username,
        password: formData.password,
        name: {
          firstname: formData.firstname,
          lastname: formData.lastname
        },
        address: {
          city: formData.city,
          street: formData.street,
          number: formData.number,
          zipcode: formData.zipcode,
          geolocation: {
            lat: formData.lat,
            long: formData.long
          }
        },
        phone: formData.phone
      });
      console.log(response.data);
      toast.success('User registered successfully!');
    } catch (error) {
    //   console.error(error);
      toast.error('Failed to register user.');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Number:</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Zipcode:</label>
          <input
            type="text"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Latitude:</label>
          <input
            type="text"
            name="lat"
            value={formData.lat}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Longitude:</label>
          <input
            type="text"
            name="long"
            value={formData.long}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
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

export default Register;

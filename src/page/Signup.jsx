import NavBar from "../components/NavBar";
import './Signup.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {

  const [data, setData] = useState({
    name: ' ',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data, [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if (!data.username.trim()) {
      validationErrors.username = "username is required"
    }

    if (!data.email.trim()) {
      validationErrors.email = "email is required"
    }

    if (!data.password.trim()) {
      validationErrors.password = "password is required"
    }

    if (data.confirmPassword !== data.password) {
      validationErrors.confirmPassword = "password not matched"
    }

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      alert("Sign up successfully");
      navigate('/login');
    }
  }

  return (
    <div>
      <NavBar />

      <div className='container' onSubmit={handleSubmit}>

        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder='name'
            onChange={handleChange}
          />
          {errors.username && <span>{errors.username}</span>}
        </div>

        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder='username'
            onChange={handleChange}
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder='email@gmail.com'
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder='******'
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <label>Password Confirmation:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder='******'
            onChange={handleChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>

        <div className="submit-container">
          <button type="submit" onClick={() => navigate('/login')}>Sign up</button>
        </div>

      </div>
    </div>
  );
};


export default Signup;

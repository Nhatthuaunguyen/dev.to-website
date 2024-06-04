import NavBar from "../components/NavBar";
import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <NavBar />

      <div className='header'>
        <div className="logo">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="devlogo"
            className="w-[50px] h-[40px] my-auto"
          />
        </div>
        <br></br>
        <div className='introduce'>
          <h1>Join to DEV Community</h1>
        </div>

      </div>

      <div className='container' onSubmit={handleSubmit}>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder='email@gmail.com'
            autoComplete='off'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder='******'
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        </div>

        <div className="forgot">
          <h1 onClick={() => navigate('/forgotPassword')}>Forgot password?</h1>
        </div>

        <div className="submit-container">
          <button type="submit" onClick={() => navigate('/')}>Log in</button>
        </div>

        <div className="sign-up">
          <div className="text">New to DEV Community?
            <span onClick={() => navigate('/signup')}>Create account.</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;

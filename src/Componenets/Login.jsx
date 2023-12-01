
import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Check if user data exists
    if (!userData) {
      alert('No user data found. Please sign up first.');
      return;
    }

    // Check if entered email and password match stored data
    if (email === userData.email && password === userData.password) {
      alert('Login successful!');
      navigate("/")
    //   onLogin(userData); // Pass user data to parent component
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />

        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

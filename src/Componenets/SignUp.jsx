import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();

        // Check if mandatory fields are filled
        if (!name || !email || !password) {
            alert('Please fill in all mandatory fields.');
            return;
        }

        // Store user data in local storage
        const userData = { name, gender, email, password };
        localStorage.setItem('userData', JSON.stringify(userData));
       alert("SignUp Successfull")
       navigate("/login")
        console.log('User signed up:', userData);
    };

    return (
        <div className='signUp'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <br />

                <label>
                    Gender:
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <br />

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

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;

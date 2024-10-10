import React, { useState } from 'react';
import './Login.css'; // Ensure you have this CSS for styling
import axios from 'axios'; // or use fetch if you prefer

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // Optional: For showing error/success messages

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            });

            setMessage(`Login successful. Your unique ID is ${response.data.uniqueId}`);
            console.log('Login successful:', response.data);
            // Redirect or do something after successful login
        } catch (error) {
            console.error('Login error:', error.response.data.message || error.message);
            setMessage(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        autoComplete="current-password"
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
                {message && <p>{message}</p>} {/* Show success or error messages */}
            </form>
        </div>
    );
};

export default Login;

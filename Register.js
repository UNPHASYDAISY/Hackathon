import React, { useState } from 'react';
import './Register.css'; // Make sure you have styles defined in Register.css

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [branch, setBranch] = useState('');
    const [passingYear, setPassingYear] = useState('');
    const [category, setCategory] = useState('student'); // Default to 'student'

    // Function to handle student registration
    const registerStudent = async (studentData) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(studentData),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Registration successful:', data);
                alert('Registration successful!');
            } else {
                console.error('Registration failed:', data);
                alert('Registration failed: ' + (data.message || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error registering student:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            const studentData = {
                name,
                email,
                password,
                rollNo,
                branch,
                passingYear,
                category,
            };
            registerStudent(studentData); // Call the API with the student data
        }
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                
                {/* Name Field */}
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />
                </div>

                {/* Email Field */}
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

                {/* Password Field */}
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        autoComplete="new-password"
                    />
                </div>

                {/* Confirm Password Field */}
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        required
                    />
                </div>

                {/* Roll Number Field */}
                <div className="form-group">
                    <label>Roll Number:</label>
                    <input
                        type="text"
                        value={rollNo}
                        onChange={(e) => setRollNo(e.target.value)}
                        placeholder="Enter your Roll Number"
                        required
                    />
                </div>

                {/* Branch Field */}
                <div className="form-group">
                    <label>Branch:</label>
                    <input
                        type="text"
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        placeholder="Enter your Branch"
                        required
                    />
                </div>

                {/* Year of Passing Field */}
                <div className="form-group">
                    <label>Year of Passing:</label>
                    <input
                        type="number"
                        value={passingYear}
                        onChange={(e) => setPassingYear(e.target.value)}
                        placeholder="Enter your Year of Passing"
                        required
                    />
                </div>

                {/* Category Dropdown */}
                <div className="form-group">
                    <label>Category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="student">Student</option>
                        <option value="alumni">Alumni</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    );
};

export default Register;

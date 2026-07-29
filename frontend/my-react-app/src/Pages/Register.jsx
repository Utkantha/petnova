import React, { useState } from 'react';
import register_picture from "../Assests/cute_cat_adoption.jpg";
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './styles/Auth.css';

export default function Register() {
  const toast = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpwd: '',
    age: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmpwd) {
      return toast({
        title: "Password and Confirm Password must match",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }

    let obj = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      age: formData.age,
      gender: formData.gender,
    };

    axios.post("https://pawfect-match-2z52.onrender.com/users/register", obj)
      .then((res) => {
        toast({
          title: `${res.data.msg}`,
          status: "success",
          isClosable: true,
        });
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })
      .catch((err) => {
        if (err.response?.status) {
          return toast({
            title: err.response.data.error || "Registration failed",
            status: 'error',
            duration: 2000,
            isClosable: true,
          });
        }
      });
  };

  return (
    <div className="auth-page">
      <div className="auth-container glass-panel animate-fade-up">
        <div className="auth-form-col">
          <div className="auth-header">
            <h2>Sign Up</h2>
            <p>Join Pawfect Match and find your new best friend</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="input-modern"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="input-modern"
                required
              />
            </div>
            
            <div className="form-row">
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="input-modern"
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="confirmpwd"
                  value={formData.confirmpwd}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="input-modern"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Age"
                  className="input-modern"
                />
              </div>
              <div className="input-group">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="input-modern select-modern"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-modern btn-primary w-full mt-2">Create Account</button>
            
            <div className="auth-footer">
              <p>Already have an account? <Link to="/login" className="auth-link">Log In</Link></p>
            </div>
          </form>
        </div>
        <div className="auth-image-col">
          <img src={register_picture} alt="Cute cat looking for adoption" />
          <div className="auth-image-overlay">
            <h2>Join Our Community</h2>
            <p>Thousands of pets are waiting for you.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

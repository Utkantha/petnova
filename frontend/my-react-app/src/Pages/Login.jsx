import React from 'react'
import { useForm } from 'react-hook-form';
import login_picture from "../Assests/cute_dog_adoption.jpg"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, get_USER_SUCCESS } from '../Redux/action-types';
import './styles/Auth.css';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch({ type: LOGIN_REQUEST });
    axios.post("https://pawfect-match-2z52.onrender.com/users/login", data)
      .then((res) => {
        dispatch({ type: LOGIN_SUCCESS });
        toast({
          title: res.data.msg,
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        dispatch({ type: get_USER_SUCCESS, payload: res.data.user });
        localStorage.setItem("token", res.data.token);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((err) => {
        dispatch({ type: LOGIN_FAILURE });
        const errorMsg = err.response?.data?.error || "Login failed";
        toast({
          title: errorMsg,
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      });
  };

  return (
    <div className="auth-page">
      <div className="auth-container glass-panel animate-fade-up">
        <div className="auth-image-col">
          <img src={login_picture} alt="Cute dog looking for adoption" />
          <div className="auth-image-overlay">
            <h2>Welcome Back</h2>
            <p>Your furry friends have missed you.</p>
          </div>
        </div>
        <div className="auth-form-col">
          <div className="auth-header">
            <h2>Log In</h2>
            <p>Enter your details to access your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            <div className="input-group">
              <input 
                type="email" 
                className="input-modern" 
                placeholder="Email Address"
                {...register("email", { required: true })} 
              />
              {errors.email && <span className="error-text">*Email is mandatory</span>}
            </div>
            
            <div className="input-group">
              <input 
                type="password" 
                className="input-modern" 
                placeholder="Password"
                {...register("password", { required: true })} 
              />
              {errors.password && <span className="error-text">*Password is mandatory</span>}
            </div>

            <button type="submit" className="btn-modern btn-primary w-full">Log In</button>
            
            <div className="auth-footer">
              <p>Don't have an account? <Link to="/register" className="auth-link">Sign Up</Link></p>
              <Link to="/admin" className="admin-link">Admin Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

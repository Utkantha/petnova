import React, { useState, useEffect } from "react";
import "./styles/navbar.css";
import petlogo from "../Assests/petlogonew.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../Redux/action-types";

export const Navbar = () => {
  const login = useSelector((state) => state.isLoggedIn);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUserName = () => {
    const name = user?.name?.split(" ")[0] || "";
    return name;
  };

  const handleLogout = async () => {
    dispatch({ type: LOGOUT_REQUEST });
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("https://pawfect-match-2z52.onrender.com/users/logout", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        dispatch({ type: LOGOUT_SUCCESS });
        localStorage.removeItem("token");
        navigate('/');
      } else {
        console.error("Logout request failed");
      }
    } catch (error) {
      dispatch({ type: LOGOUT_FAILURE });
      console.error("Error occurred during logout:", error);
    }
  };

  const getMenuClass = (path) => {
    return location.pathname === path ? "active-link" : "";
  };

  return (
    <header className={`navbar glass-panel ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <img src={petlogo} alt="Pawfect Match Logo" />
          <h2>Pawfect Match</h2>
        </Link>
        
        <nav className="nav-menu">
          <ul>
            <li><Link to="/" className={getMenuClass('/')}>Home</Link></li>
            <li><Link to="/dog" className={getMenuClass('/dog')}>Dogs</Link></li>
            <li><Link to="/cat" className={getMenuClass('/cat')}>Cats</Link></li>
            <li><Link to="/about" className={getMenuClass('/about')}>About</Link></li>
            <li><Link to="/pet-adoption" className={getMenuClass('/pet-adoption')}>Adopt</Link></li>
            <li><Link to="/contact" className={getMenuClass('/contact')}>Contact</Link></li>
          </ul>
        </nav>

        <div className="nav-actions">
          {login ? (
            <div className="user-profile">
              <span className="username">Hi, {handleUserName()}!</span>
              <button onClick={handleLogout} className="btn-modern btn-secondary logout-btn">Logout</button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-link">Log In</Link>
              <Link to="/register" className="btn-modern btn-primary">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

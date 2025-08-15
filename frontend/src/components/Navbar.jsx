import React from 'react';
import '../css/Navbar.css';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#" className="logo">Fitmate</a>
      </div>
      
      <div className="nav-right">
      <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <a href="#" className="login-btn" onClick={() => {navigate('/login')}}>Login</a>
        <a href="#" className="login-btn" onClick={() => {navigate('/signup')}}>Signup</a>
      </div>
    </nav>
  );
};

export default Navbar;
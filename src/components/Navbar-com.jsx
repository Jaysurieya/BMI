import React from 'react';
import '../css/Navbar.css';
import { FaUser, FaUserCircle, FaRegUserCircle} from 'react-icons/fa'

const Navbar_com = () => {
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
        <a href="#" className="login-btn"><FaUserCircle size={20}/></a>
      </div>
    </nav>
  );
};

export default Navbar_com;
import React from 'react';
import '../styles/Styles.css'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
          <span className="navbar-name">Yuchen Lu</span>
          <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"}>Home</NavLink>
            <NavLink to="/simulation" className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"}>Simulation</NavLink>
            <NavLink to="/credits" className={({ isActive }) => isActive ? "nav-link nav-link-active" : "nav-link"}>Credits</NavLink>
          </div>
        </nav>
      );
};

export default Navbar;

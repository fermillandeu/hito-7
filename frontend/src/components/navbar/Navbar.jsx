import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'; 
import './Navbar.css';

const Navbar = () => {
  const { token, logout } = useContext(UserContext); 

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Pizzeria</Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-button">Home</Link>
        {token ? (
          <>
            <Link to="/profile" className="navbar-button">Profile</Link>
            <button onClick={logout} className="navbar-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-button">Login</Link>
            <Link to="/register" className="navbar-button">Register</Link>
          </>
        )}
        <Link to="/cart" className="navbar-button">Carrito</Link>
      </div>
    </nav>
  );
};

export default Navbar;

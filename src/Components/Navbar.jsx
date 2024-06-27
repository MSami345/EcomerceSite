import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"; // Import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';
import image from "../assets/lg.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo">
          <Link to="/"><img src={image} alt="logo"/></Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="cart-icon">
          <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

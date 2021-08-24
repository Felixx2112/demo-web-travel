import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TRVL <i className="fab fa-artstation"></i>
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/services" className="nav-links">
              Services
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/product" className="nav-links">
              Product
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/sign-in" className="nav-links">
              <button className="btn--outline">SIGN IN</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

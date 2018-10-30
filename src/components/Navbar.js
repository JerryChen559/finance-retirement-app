import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    // <div className="navbar-bg">

    // still need to make the nav bar background turn grey on scroll
    <div className="nav-wrapper">
      <div className="navbar-name">
        <Link to="/">Application Name</Link>
      </div>

      <ul className="nav-items">
        <li className="has-divider learnmore">
          <Link to="/learnmore">
            <div>Learn More </div>
          </Link>
        </li>
        <li className="has-divider login">
          <Link to="/login">
            <div>Log In</div>
          </Link>
        </li>
        <li className="has-divider signup">
          <Link to="/signup">
            <div>Sign Up</div>
          </Link>
        </li>
      </ul>
    </div>
    // </div>
  );
}

export default Navbar;

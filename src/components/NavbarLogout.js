import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const redirect = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/login`;
  };
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
          {/* end session onClick */}
          <div onClick={() => redirect()}>Logout</div>
        </li>
      </ul>
    </div>
    // </div>
  );
}

export default Navbar;

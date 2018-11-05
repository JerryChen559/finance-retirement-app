import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import Navbar from "./Navbar";
import "./Navbar.css";

function Home() {
  const redirect = () => {
    window.location.href = `${process.env.REACT_APP_SERVER}/login`;
  };
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="homedisplay">
        <h1>Welcome to the 'AppName' Finance App</h1>
        <h2>Let us help you retire early.</h2>
        <span className="getstarted" onClick={() => redirect()}>
          Get Started
        </span>
        <Link to="/incomestatement">link to app for now</Link>
      </div>
      <div className="aboutdisplay">
        <h1>what the app is -blah blah blah </h1>
        <p>
          provides a broad picture of your net earnings and shows you how saving
          a large portion of your income can lead to early retirementblah blah
          blah
        </p>
        <p>
          who is it for. This is not for people who are in serious debt. This is
          not for people who are living from paycheck to paycheck. This is not
          for peo blah blah blah
        </p>
        <p>how the app works blah blah blah</p>
        <p>where blah blah blah</p>
        <p>when: blah blah blah</p>
        <p>why</p>

        <h3>
          <Link to="/learnmore">Learn More</Link>
        </h3>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import Navbar from "./Navbar";

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
        <h1>Welcome to the Ridley Finance App</h1>
        <h2>Let us help you retire early.</h2>
        <span className="getstarted" onClick={() => redirect()}>
          Get Started
        </span>
        {/* Comment out when done: Link to enter app without signing in */}
        {/* <Link to="/incomestatement">link to bypass login for now</Link> */}
      </div>
      <div className="aboutimage" />
      <div className="aboutdisplay">
        <span className="aboutwords">
          <h1>What Ridley is All About </h1>
          <p>Early Retirement Made Easy</p>
          <p>Promote FIRE (Financial Independence Retire Early</p>
          <p>
            Having the mindset of actually being able to retire makes you half
            way there.
          </p>
          <p>
            - The goal of this application is to make personal financing fun and
            easy. We want let the user know what it will take for him/her to
            leave the 9 to 5 rat race and reach financial freedom.
          </p>
          <p>
            - Successful projects consist of three main parts: knowledge,
            planning and execution. The project we are trying to solve is
            retirement. This application will provide a broad picture of your
            net earnings and show how saving a large portion of your income can
            lead to early retirement. make the user aware of where their income
            is going Fire approach. Making the process seem blah blah blah
          </p>
          <p>
            <strong> - Who: </strong>This application is for people with
            consistant expenses who are able to save a portion of their paycheck
            to retirement. If that sounds like you, then this app is for you!
          </p>
          <p>
            <strong> - How the App Works: </strong> The application will help
            you build an income statement. You will then be able to explore the
            results of different savings rates and plan an approapriate way to
            spend going forward.{" "}
          </p>
          <p>
            <strong> - Where:</strong> anywhere
          </p>
          <p>
            <strong> - When:</strong> now
          </p>
          <p>
            <strong> - Why:</strong> Budgeting is important and being
            financially capable is a win. This application should make you aware
            of your spending habits which is a great start.
          </p>

          <h3>
            <Link to="/learnmore">Learn More</Link>
          </h3>
        </span>
      </div>
    </div>
  );
}

export default Home;

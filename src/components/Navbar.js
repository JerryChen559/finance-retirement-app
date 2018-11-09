import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../redux/reducers/profileReducer";

import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // loggedIn: false,
      // user: {}
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    console.log(this.props);

    const redirectLogin = () => {
      window.location.href = `${process.env.REACT_APP_SERVER}/login`;
    };
    const redirectLogout = () => {
      window.location.href = `${process.env.REACT_APP_SERVER}/logout`;
    };

    // use this to conditionally render navbar based on loggedin state
    let appname = this.props.profile.loggedIn ? (
      <Link to="/incomestatement">Application Name</Link>
    ) : (
      <Link to="/">Application Name</Link>
    );

    let logtoggle = this.props.profile.loggedIn ? (
      <div onClick={() => redirectLogout()} style={{ color: "white" }}>
        Log Out
      </div>
    ) : (
      <div onClick={() => redirectLogin()} style={{ color: "white" }}>
        Log In / Sign Up
      </div>
    );

    return (
      // <div className="navbar-bg">
      // still need to make the nav bar background turn grey on scroll

      <div className="nav-wrapper">
        <div className="navbar-name">{appname}</div>

        <ul className="nav-items">
          <li className="has-divider learnmore">
            <Link to="/learnmore">
              <div>Learn More </div>
            </Link>
          </li>

          <li className="has-divider signup">{logtoggle}</li>
        </ul>
      </div>

      // </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(Navbar);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../redux/reducers/profileReducer";

import "./Navbar.css";
// import axios from "./axios";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // loggedIn: false,
      // user: {}
    };
  }
  // test: req.user on the front end after logging in.
  // axios.get('/api/getuser')
  // server.get('/user', )

  componentDidMount() {
    this.props.getUser();
  }

  // checkLogged = () => {
  //   axios
  //     .get("/login")
  //     .then(response => {
  //       console.log(response);
  //       // if (response === auth_id) {
  //       //   this.setState({ loggedIn: true });
  //       // }
  //     })
  //     .catch(err => console.log(err));
  // };

  // mapStateToPropsconditionally render example
  // {this.props.user.user.user_name ? (
  //   <div>
  //     <a href={REACT_APP_LOGOUT}>Logout</a>
  //     <p>Welcome, {this.props.user.user.user_name}</p>
  //   </div>
  // ) : (
  //   <div>
  //     <a href={REACT_APP_LOGIN}>Login</a>
  //   </div>

  render() {
    // console.log(req.user);
    console.log(this.props);

    const redirect = () => {
      window.location.href = `${process.env.REACT_APP_SERVER}/login`;
    };

    // use this to conditionally render navbar based on loggedin state. req.user

    let navlook = this.props.loggedIn ? (
      <div className="nav-wrapper">
        <div className="navbar-name">
          <Link to="/incomestatement">Application Name</Link>
        </div>

        <ul className="nav-items">
          <li className="has-divider learnmore">
            <Link to="/learnmore">
              <div>Learn More </div>
            </Link>
          </li>
          <li className="has-divider signup">
            <div onClick={() => redirect()}>Log Out</div>
          </li>
        </ul>
      </div>
    ) : (
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
          <li className="has-divider signup">
            <div onClick={() => redirect()}>Log In / Sign Up</div>
          </li>
        </ul>
      </div>
    );

    return (
      // <div className="navbar-bg">
      // still need to make the nav bar background turn grey on scroll

      <div className="nav-wrapper">
        {/* <div className="navbar-name">
          <Link to="/">Application Name</Link>
        </div>

        <ul className="nav-items">
          <li className="has-divider learnmore">
            <Link to="/learnmore">
              <div>Learn More </div>
            </Link>
          </li>

          <li className="has-divider signup">
            <div onClick={() => redirect()}>Log In / Sign Up</div>
          </li>
        </ul> */}
        {navlook}
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

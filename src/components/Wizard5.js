import React, { Component } from "react";
// import { connect } from "react-redux";
// import { updateBlah, ___, updateCost, updateDownPayment } from "../../redux/_blah_reducer";
import { Link } from "react-router-dom";
import "./Wizard.css";

class Wizard5 extends Component {
  render() {
    return (
      <div className="parent-div">
        <h6>clothes, gym, restaurant, entertainment, travel</h6>
        <div className="vert-align">
          <p>What is the estimated purchase price?</p> <br />
          <input
            type="text"
            placeholder="amount"
            // onChange={e => updateCost(e.target.value)}
          />{" "}
          <br />
          <p>How much are you putting down as a down payment?</p> <br />
          <input
            type="text"
            placeholder="amount"
            // onChange={e => updateDownPayment(e.target.value)}
          />
          <div>
            <span>Form is 100% complete! </span>
            <Link to="/incomestatement">
              <button className="margin-btn"> Done </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard5;

import React, { Component } from "react";
// import { connect } from "react-redux";
// import { updateBlah, ___, updateCost, updateDownPayment } from "../../redux/_blah_reducer";
import { Link } from "react-router-dom";
import "./Wizard.css";

class Wizard2 extends Component {
  render() {
    return (
      <div className="parent-div">
        {/* A place for user to input healthcare, rent, mortgage, car, gas, school, water, food */}
        <div className="vert-align">
          <p>Cost of rent</p>
          <input
            type="number"
            placeholder="rent"
            // onChange={e => updateDownPayment(e.target.value)}
          />
          <br />
          <p>Monthly mortgage / HOA / Home Insurance </p>
          <input
            type="number"
            placeholder="mortgage"
            // onChange={e => updateDownPayment(e.target.value)}
          />
          <br />
          <p>Car Payment / Car Insurance</p>
          <input
            type="number"
            placeholder="car payment"
            // onChange={e => updateDownPayment(e.target.value)}
          />
          <br />
          <p>Gasoline / Subway Pass</p>
          <input
            type="number"
            placeholder="commute"
            // onChange={e => updateDownPayment(e.target.value)}
          />
          <br />
          <p>Water / Electricity / Heating / Internet / Cable</p>
          <input
            type="number"
            placeholder="bills"
            // onChange={e => updateDownPayment(e.target.value)}
          />
          <div>
            <span>Form is 50% complete! </span>
            <Link to="/wizardthree">
              <button className="margin-btn"> Next </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard2;

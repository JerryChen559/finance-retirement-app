import React, { Component } from "react";
// import { connect } from "react-redux";
// import { updateBlah, ___, updateCost, updateDownPayment } from "../../redux/_blah_reducer";
import { Link } from "react-router-dom";
import "./Wizard.css";

class Wizard3 extends Component {
  render() {
    return (
      <div className="parent-div">
        {/* clothes, gym, restaurant, entertainment, travel */}
        <div className="vert-align">
          <p>Amounth per month you spend on healthcare.</p>
          <input
            type="number"
            placeholder="healthcare"
            // onChange={e => updateCost(e.target.value)}
          />
          <br />
          <p>School Fees / Student Debt Payment </p>
          <input
            type="number"
            placeholder="school fees"
            // onChange={e => updateCost(e.target.value)}
          />
          <br />
          <p>Monthly spending on groceries</p>
          <input
            type="number"
            placeholder="groceries"
            // onChange={e => updateDownPayment(e.target.value)}
          />
          <br />
          <p>Monthly amount spent on restaurants</p>
          <input
            type="number"
            placeholder="restaurants"
            // onChange={e => updateDownPayment(e.target.value)}
          />
          <br />
          <div>
            <span>Form is 75% complete! </span>
            <Link to="/wizardfour">
              <button className="margin-btn"> Next </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard3;

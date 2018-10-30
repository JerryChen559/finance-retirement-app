import React, { Component } from "react";
// import { connect } from "react-redux";
// import { updateBlah, ___, updateCost, updateDownPayment } from "../../redux/_blah_reducer";
import { Link } from "react-router-dom";
import "./Wizard.css";

class Wizard4 extends Component {
  render() {
    return (
      <div className="parent-div">
        {/* clothes, gym, restaurant, entertainment, travel */}
        <div className="vert-align">
          <p>Entertainment / Movies / Concerts</p>
          <input
            type="number"
            placeholder="entertainment"
            // onChange={e => updateDownPayment(e.target.value)}
          />
          <br />
          <p>Business clothes / shoes</p>
          <input
            type="number"
            placeholder="clothes"
            // onChange={e => updateCost(e.target.value)}
          />
          <br />
          <p>Gym membership</p>
          <input
            type="number"
            placeholder="gym fee"
            // onChange={e => updateDownPayment(e.target.value)}
          />
          <br />
          <p>Travel costs broken up monthly (rough estimate)</p>
          <input
            type="number"
            placeholder="travel"
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

export default Wizard4;
